'use client';

import Image from 'next/image';
import { LOCATION_QUERY } from '@/apollo/queries';
import { useQuery } from '@apollo/client';
import Loader from '../Loader/Loader';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';

type LocationProps = {
  id: string;
};

const Location = ({ id }: LocationProps) => {
  const { data, loading, error } = useQuery(LOCATION_QUERY, {
    variables: { id },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) return <p>Error: {error.message}</p>;

  const location = data?.location;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-card rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold">{location.name}</h1>
            <p className="text-muted-foreground">{location.type}</p>
          </div>
          <div className="text-muted-foreground">{location.dimension}</div>
        </div>
        <Separator className="my-4" />
        <div>
          <h2 className="text-xl font-semibold mb-4">Residents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {location.residents.length
              ? location.residents.map(
                  (
                    resident: {
                      id: string;
                      name: string;
                      image: string;
                    },
                    index: number,
                  ) => (
                    <Card key={index} className="p-4">
                      <CardHeader>
                        <Image
                          src={resident.image}
                          width={200}
                          height={200}
                          alt={resident.name}
                          className="rounded-full mx-auto"
                        />
                      </CardHeader>
                      <CardContent>
                        <div className="text-center">
                          <h3 className="text-lg font-semibold">
                            {resident.name}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  ),
                )
              : 'No residents found.'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
