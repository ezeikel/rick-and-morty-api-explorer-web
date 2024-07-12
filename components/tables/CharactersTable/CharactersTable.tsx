'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { CHARACTERS_QUERY } from '@/apollo/queries';
import { charactersColumns } from '../columns';
import { DataTable } from '../DataTable/DataTable';
import Loader from '@/components/Loader/Loader';

const CharactersTable = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data, loading, error } = useQuery(CHARACTERS_QUERY, {
    variables: { page: pageIndex },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) return <p>Error: {error.message}</p>;

  const tableData = data.characters.results.map(
    (character: {
      id: string;
      name: string;
      species: string;
      origin: { name: string };
      location: { name: string };
    }) => {
      return {
        id: character.id,
        name: character.name,
        species: character.species,
        origin: character.origin.name,
        location: character.location.name,
      };
    },
  );

  return (
    <DataTable
      columns={charactersColumns}
      data={tableData}
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
      pageCount={data.characters.info.pages}
    />
  );
};

export default CharactersTable;
