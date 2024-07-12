'use client';

import { useQuery } from '@apollo/client';
import { CHARACTER_QUERY } from '@/apollo/queries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Loader from '../Loader/Loader';
import Image from 'next/image';
import { faMapMarkerAlt } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CharacterData, CharacterVars } from '@/types';

type CharacterProps = {
  id: string;
};

const Character = ({ id }: CharacterProps) => {
  const { data, loading, error } = useQuery<CharacterData, CharacterVars>(
    CHARACTER_QUERY,
    {
      variables: { id },
    },
  );

  if (loading) {
    return <Loader />;
  }

  if (error) return <p>Error: {error.message}</p>;

  const character = data?.character;

  if (!character) {
    return <p>Character not found</p>;
  }

  return (
    <div className="flex flex-col gap-6 p-6 lg:p-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex gap-4">
          <Image
            src={character.image}
            width={120}
            height={120}
            alt={character.name}
            className="rounded-full"
          />
          <div>
            <h1 className="text-3xl font-bold">{character.name}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div
                className={`h-2 w-2 rounded-full bg-${
                  character.status.toLowerCase() === 'alive' ? 'green' : 'red'
                }-500`}
              />
              <span>{character.status}</span> - <span>{character.species}</span>{' '}
              - <span>{character.gender}</span>
            </div>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2 text-muted-foreground">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5" />
          <span>{character.location.name}</span>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quibusdam doloribus alias est veritatis ut animi culpa dolorem et
              porro eligendi nostrum, quod optio repellat minima, nesciunt vitae
              aliquam possimus!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Origin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div>
                <span className="font-semibold">Type:</span>{' '}
                {character.location.type}
              </div>
              <div>
                <span className="font-semibold">Residents:</span>
                <ul className="ml-4 list-disc">
                  {character.location.residents.map((resident) => (
                    <li key={resident.id}>{resident.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Character;
