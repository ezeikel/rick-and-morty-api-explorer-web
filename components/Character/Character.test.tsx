import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { CHARACTER_QUERY } from '@/apollo/queries';
import Character from './Character';

const characterMock: MockedResponse = {
  request: {
    query: CHARACTER_QUERY,
    variables: { id: '1' },
  },
  result: {
    data: {
      character: {
        id: '1',
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        type: 'Scientist',
        gender: 'Male',
        origin: {
          id: '10',
          name: 'Earth (C-137)',
          type: 'Planet',
          dimension: 'Dimension C-137',
          residents: [
            {
              id: '1',
              name: 'Rick Sanchez',
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            },
            {
              id: '2',
              name: 'Morty Smith',
              image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            },
          ],
          created: '2017-11-04T18:48:46.250Z',
        },
        location: {
          id: '20',
          name: 'Earth (Replacement Dimension)',
          type: 'Planet',
          dimension: 'Replacement Dimension',
          residents: [
            {
              id: '1',
              name: 'Rick Sanchez',
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            },
            {
              id: '2',
              name: 'Morty Smith',
              image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            },
          ],
          created: '2017-11-04T18:48:46.250Z',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        episode: [
          {
            id: '1',
            name: 'Pilot',
            air_date: 'December 2, 2013',
            episode: 'S01E01',
            characters: [
              {
                id: '1',
                name: 'Rick Sanchez',
                image:
                  'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              },
              {
                id: '2',
                name: 'Morty Smith',
                image:
                  'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
              },
            ],
            created: '2017-11-04T18:48:46.250Z',
          },
          {
            id: '2',
            name: 'Lawnmower Dog',
            air_date: 'December 9, 2013',
            episode: 'S01E02',
            characters: [
              {
                id: '1',
                name: 'Rick Sanchez',
                image:
                  'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              },
              {
                id: '2',
                name: 'Morty Smith',
                image:
                  'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
              },
            ],
            created: '2017-11-04T18:50:21.651Z',
          },
        ],
        created: '2017-11-04T18:48:46.250Z',
      },
    },
  },
};

describe('Character Component', () => {
  it('renders loader while loading', () => {
    const { container } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Character id="1" />
      </MockedProvider>,
    );

    expect(container).toContainElement(screen.getByTestId('loader'));
  });

  it('renders error message on error', async () => {
    const errorMock = {
      request: {
        query: CHARACTER_QUERY,
        variables: { id: '1' },
      },
      error: new Error('An error occurred'),
    };

    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <Character id="1" />
      </MockedProvider>,
    );

    const errorMessage = await screen.findByText(/Error: An error occurred/i);
    expect(errorMessage).toBeInTheDocument();
  });

  // TODO: fix this test
  xit('renders character data', async () => {
    render(
      <MockedProvider mocks={[characterMock]} addTypename={false}>
        <Character id="1" />
      </MockedProvider>,
    );

    const characterName = await screen.findByText(/Rick Sanchez/i);
    expect(characterName).toBeInTheDocument();

    const characterStatus = await screen.findByText(/Alive/i);
    expect(characterStatus).toBeInTheDocument();

    const characterSpecies = await screen.findByText(/Human/i);
    expect(characterSpecies).toBeInTheDocument();

    const characterGender = await screen.findByText(/Male/i);
    expect(characterGender).toBeInTheDocument();

    const characterLocation = await screen.findByText(/Earth \(C-137\)/i);
    expect(characterLocation).toBeInTheDocument();

    const originType = await screen.findByText(/Type: Planet/i);
    expect(originType).toBeInTheDocument();

    const resident1 = await screen.findByText(/Morty Smith/i);
    expect(resident1).toBeInTheDocument();

    const resident2 = await screen.findByText(/Summer Smith/i);
    expect(resident2).toBeInTheDocument();
  });
});
