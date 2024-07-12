import EpisodesTable from '../tables/EpisodesTable/EpisodesTable';

const Episodes = () => (
  <div className="flex-1 flex flex-col p-6">
    <h3 className="text-4xl font-bold text-primary mb-6">Episodes</h3>
    <EpisodesTable />
  </div>
);

export default Episodes;
