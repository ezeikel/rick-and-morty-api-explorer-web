import CharactersTable from '../tables/CharactersTable/CharactersTable';

const Characters = () => (
  <div className="flex-1 flex flex-col p-6">
    <h3 className="text-4xl font-bold text-primary mb-6">Characters</h3>
    <CharactersTable />
  </div>
);

export default Characters;
