import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Loading from './Loading';

describe('Loading Component', () => {
  it('renders the loading spinner and text', () => {
    render(<Loading />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
