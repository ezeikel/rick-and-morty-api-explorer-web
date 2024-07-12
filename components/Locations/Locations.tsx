import LocationsTable from '../tables/LocationsTable/LocationsTable';

const Locations = () => (
  <div className="flex-1 flex flex-col p-6">
    <h3 className="text-4xl font-bold text-primary mb-6">Locations</h3>
    <LocationsTable />
  </div>
);

export default Locations;
