'use client';

import { EPISODE_QUERY } from '@/apollo/queries';
import Loader from '../Loader/Loader';
import { useQuery } from '@apollo/client';
import Image from 'next/image';

type EpisodeProps = {
  id: string;
};

const Episode = ({ id }: EpisodeProps) => {
  const { data, loading, error } = useQuery(EPISODE_QUERY, {
    variables: { id },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) return <p>Error: {error.message}</p>;

  const episode = data?.episode;

  if (!episode)
    return (
      <div>
        <p>Episode not found</p>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8">
        <div>
          <h1 className="text-3xl font-bold">{episode.name}</h1>
          <p className="text-muted-foreground">Aired: {episode.air_date}</p>
        </div>
        <div className="grid gap-6">
          <h2 className="text-2xl font-semibold">Characters</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {episode.characters.map(
              (character: { id: string; name: string; image: string }) => (
                <div
                  className="flex flex-col items-center gap-2"
                  key={character.id}
                >
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <p className="text-center text-sm font-medium">
                    {character.name}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;
