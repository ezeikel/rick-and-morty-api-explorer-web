'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOCATIONS_QUERY } from '@/apollo/queries';
import Loader from '@/components/Loader/Loader';
import { locationsColumns } from '../columns';
import { DataTable } from '../DataTable/DataTable';

const LocationsTable = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data, loading, error } = useQuery(LOCATIONS_QUERY, {
    variables: { page: pageIndex },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) return <p>Error: {error.message}</p>;

  const tableData = data.locations.results.map(
    (location: {
      id: string;
      name: string;
      type: string;
      dimension: string;
    }) => {
      return {
        id: location.id,
        name: location.name,
        type: location.type,
        dimension: location.dimension,
      };
    },
  );

  return (
    <DataTable
      columns={locationsColumns}
      data={tableData}
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
      pageCount={data.locations.info.pages}
    />
  );
};

export default LocationsTable;
