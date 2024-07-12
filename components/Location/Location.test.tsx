import { render, screen } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import Location from '@/components/Location/Location';
import { LOCATION_QUERY } from '@/apollo/queries';
import '@testing-library/jest-dom';

const locationMock: MockedResponse = {
  request: {
    query: LOCATION_QUERY,
    variables: { id: '1' },
  },
  result: {
    data: {
      location: {
        name: 'Earth (C-137)',
        type: 'Planet',
        dimension: 'Dimension C-137',
        residents: [
          {
            id: '1',
            name: 'Rick Sanchez',
            image: 'https://example.com/rick.png',
          },
          {
            id: '2',
            name: 'Morty Smith',
            image: 'https://example.com/morty.png',
          },
        ],
      },
    },
  },
};

describe('Location Component', () => {
  it('renders loading state', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Location id="1" />
      </MockedProvider>,
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error message on error', async () => {
    const errorMock = [
      {
        request: {
          query: LOCATION_QUERY,
          variables: { id: '1' },
        },
        error: new Error('An error occurred'),
      },
    ];

    render(
      <MockedProvider mocks={errorMock} addTypename={false}>
        <Location id="1" />
      </MockedProvider>,
    );

    expect(
      await screen.findByText(/Error: An error occurred/i),
    ).toBeInTheDocument();
  });

  // TODO: fix this test
  xit('renders location data', async () => {
    render(
      <MockedProvider mocks={[locationMock]} addTypename={false}>
        <Location id="1" />
      </MockedProvider>,
    );

    expect(await screen.findByText('Earth (C-137)')).toBeInTheDocument();
    expect(screen.getByText('Planet')).toBeInTheDocument();
    expect(screen.getByText('Dimension C-137')).toBeInTheDocument();
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
  });

  // TODO: fix this test
  xit('renders no residents message', async () => {
    const noResidentsMock = [
      {
        request: {
          query: LOCATION_QUERY,
          variables: { id: '1' },
        },
        result: {
          data: {
            location: {
              name: 'Unknown Location',
              type: 'Unknown',
              dimension: 'Unknown',
              residents: [],
            },
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={noResidentsMock} addTypename={false}>
        <Location id="1" />
      </MockedProvider>,
    );

    expect(await screen.findByText('Unknown Location')).toBeInTheDocument();
    expect(screen.getByText('No residents found.')).toBeInTheDocument();
  });
});
