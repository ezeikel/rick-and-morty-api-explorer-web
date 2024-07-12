import Link from 'next/link';

export const charactersColumns = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'species',
    header: 'Species',
  },
  {
    accessorKey: 'origin',
    header: 'Origin',
  },
  {
    accessorKey: 'location',
    header: 'Location',
  },
  {
    id: 'actions',
    cell: ({
      row,
    }: {
      row: {
        original: {
          id: string;
        };
      };
    }) => {
      return (
        <div className="flex justify-center">
          <Link
            href={`/character/${row.original.id}`}
            className="text-green-500 border-2 border-green-500 py-1 px-3 rounded hover:bg-green-500 hover:text-white"
          >
            View
          </Link>
        </div>
      );
    },
  },
];

export const episodesColumns = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'air_date',
    header: 'Air Date',
  },
  {
    accessorKey: 'episode',
    header: 'Episode',
  },
  {
    id: 'actions',
    cell: ({
      row,
    }: {
      row: {
        original: {
          id: string;
        };
      };
    }) => {
      return (
        <div className="flex justify-center">
          <Link
            href={`/episode/${row.original.id}`}
            className="text-green-500 border-2 border-green-500 py-1 px-3 rounded hover:bg-green-500 hover:text-white"
          >
            View
          </Link>
        </div>
      );
    },
  },
];

export const locationsColumns = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'dimension',
    header: 'Dimension',
  },
  {
    id: 'actions',
    cell: ({
      row,
    }: {
      row: {
        original: {
          id: string;
        };
      };
    }) => {
      return (
        <div className="flex justify-center">
          <Link
            href={`/location/${row.original.id}`}
            className="text-green-500 border-2 border-green-500 py-1 px-3 rounded hover:bg-green-500 hover:text-white"
          >
            View
          </Link>
        </div>
      );
    },
  },
];
