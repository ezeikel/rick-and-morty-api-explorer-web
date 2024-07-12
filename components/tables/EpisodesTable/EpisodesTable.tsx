'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { EPISODES_QUERY } from '@/apollo/queries';
import Loader from '@/components/Loader/Loader';
import { episodesColumns } from '../columns';
import { DataTable } from '../DataTable/DataTable';

const EpisodesTable = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data, loading, error } = useQuery(EPISODES_QUERY, {
    variables: { page: pageIndex },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) return <p>Error: {error.message}</p>;

  const tableData = data.episodes.results.map(
    (episode: {
      id: string;
      name: string;
      air_date: string;
      episode: string;
    }) => {
      return {
        id: episode.id,
        name: episode.name,
        air_date: episode.air_date,
        episode: episode.episode,
      };
    },
  );

  return (
    <DataTable
      columns={episodesColumns}
      data={tableData}
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
      pageCount={data.episodes.info.pages}
    />
  );
};

export default EpisodesTable;
