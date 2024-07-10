import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import CharacterDetail from './[id]';
import { GET_CHARACTER } from '../../apollo/queries/characterQueries';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockRouter = {
  query: { id: '1' },
};

const characterMock = {
  request: {
    query: GET_CHARACTER,
    variables: { id: '1' },
  },
  result: {
    data: {
      character: {
        id: '1',
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
    },
  },
};

const errorMock = {
  request: {
    query: GET_CHARACTER,
    variables: { id: '1' },
  },
  error: new Error('An error occurred'),
};

describe('CharacterDetail Component', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  it('renders loading state', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <RecoilRoot>
          <CharacterDetail />
        </RecoilRoot>
      </MockedProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', async () => {
    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <RecoilRoot>
          <CharacterDetail />
        </RecoilRoot>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Error: An error occurred')).toBeInTheDocument();
    });
  });

  it('renders character details', async () => {
    render(
      <MockedProvider mocks={[characterMock]} addTypename={false}>
        <RecoilRoot>
          <CharacterDetail />
        </RecoilRoot>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
      expect(screen.getByText('Status: Alive')).toBeInTheDocument();
      expect(screen.getByText('Species: Human')).toBeInTheDocument();
      expect(screen.getByText('Gender: Male')).toBeInTheDocument();
    });
  });
});
