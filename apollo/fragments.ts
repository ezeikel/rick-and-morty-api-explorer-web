import { gql } from '@apollo/client';

export const CHARACTERS_LIST_FIELDS = gql`
  fragment CharactersListFields on Character {
    id
    name
    species
    origin {
      id
      name
    }
    location {
      id
      name
    }
  }
`;

export const NESTED_CHARACTER_FIELDS = gql`
  fragment NestedCharacterFields on Character {
    id
    name
    image
  }
`;

export const ALL_CHARACTER_FIELDS = gql`
  ${NESTED_CHARACTER_FIELDS}
  fragment AllCharacterFields on Character {
    id
    name
    status
    species
    type
    gender
    origin {
      id
      name
      type
      dimension
      residents {
        ...NestedCharacterFields
      }
      created
    }
    location {
      id
      name
      type
      dimension
      residents {
        ...NestedCharacterFields
      }
      created
    }
    image
    episode {
      id
      name
      air_date
      episode
      characters {
        ...NestedCharacterFields
      }
      created
    }
    created
  }
`;

export const EPISODE_FIELDS = gql`
  ${NESTED_CHARACTER_FIELDS}
  fragment EpisodeFields on Episode {
    id
    name
    air_date
    episode
    characters {
      ...NestedCharacterFields
    }
    created
  }
`;

export const LOCATION_FIELDS = gql`
  ${NESTED_CHARACTER_FIELDS}
  fragment LocationFields on Location {
    id
    name
    type
    dimension
    residents {
      ...NestedCharacterFields
    }
    created
  }
`;
