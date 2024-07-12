import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import Episode from './Episode';
import { EPISODE_QUERY } from '@/apollo/queries';

const episodeMock: MockedResponse = {
  request: {
    query: EPISODE_QUERY,
    variables: { id: '1' },
  },
  result: {
    data: {
      episode: {
        id: '1',
        name: 'Pilot',
        air_date: 'December 2, 2013',
        episode: 'S01E01',
        characters: [
          { id: '1', name: 'Rick Sanchez', image: '/rick.png' },
          { id: '2', name: 'Morty Smith', image: '/morty.png' },
        ],
        created: '2017-11-04T18:48:46.250Z',
      },
    },
  },
};

describe('Episode Component', () => {
  it('renders loader while loading', () => {
    const { container } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Episode id="1" />
      </MockedProvider>,
    );

    expect(container).toContainElement(screen.getByTestId('loader'));
  });

  xit('renders error message on error', async () => {
    const errorMock = {
      request: {
        query: EPISODE_QUERY,
        variables: { id: '1' },
      },
      error: new Error('An error occurred'),
    };

    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <Episode id="1" />
      </MockedProvider>,
    );

    const errorMessage = await screen.findByText(/Error: An error occurred/i);
    expect(errorMessage).toBeInTheDocument();
  });

  // TODO: fix this test
  xit('renders episode data', async () => {
    render(
      <MockedProvider mocks={[episodeMock]} addTypename={false}>
        <Episode id="1" />
      </MockedProvider>,
    );

    expect(await screen.findByText('Pilot')).toBeInTheDocument();
    expect(
      await screen.getByText('Aired: December 2, 2013'),
    ).toBeInTheDocument();
    expect(await screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(await screen.getByText('Morty Smith')).toBeInTheDocument();
  });
});
