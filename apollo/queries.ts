import { gql } from '@apollo/client';
import {
  ALL_CHARACTER_FIELDS,
  CHARACTERS_LIST_FIELDS,
  EPISODE_FIELDS,
  LOCATION_FIELDS,
} from './fragments';

export const CHARACTERS_QUERY = gql`
  ${CHARACTERS_LIST_FIELDS}
  query CHARACTERS_QUERY($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        ...CharactersListFields
      }
    }
  }
`;

export const CHARACTER_QUERY = gql`
  ${ALL_CHARACTER_FIELDS}
  query CHARACTER_QUERY($id: ID!) {
    character(id: $id) {
      ...AllCharacterFields
    }
  }
`;

export const LOCATIONS_QUERY = gql`
  ${LOCATION_FIELDS}
  query LOCATIONS_QUERY($page: Int) {
    locations(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        ...LocationFields
      }
    }
  }
`;

export const LOCATION_QUERY = gql`
  ${LOCATION_FIELDS}
  query LOCATION_QUERY($id: ID!) {
    location(id: $id) {
      ...LocationFields
    }
  }
`;

export const EPISODES_QUERY = gql`
  ${EPISODE_FIELDS}
  query EPISODES_QUERY($page: Int) {
    episodes(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        ...EpisodeFields
      }
    }
  }
`;

export const EPISODE_QUERY = gql`
  ${EPISODE_FIELDS}
  query EPISODE_QUERY($id: ID!) {
    episode(id: $id) {
      ...EpisodeFields
    }
  }
`;
