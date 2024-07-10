import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!){
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
    }
  }
`;
