import Location from '@/components/Location/Location';
import PageWrap from '@/components/PageWrap/PageWrap';

type LocationPageProps = {
  params: {
    id: string;
  };
};

const LocationPage = async ({ params: { id } }: LocationPageProps) => {
  return (
    <PageWrap>
      <Location id={id} />
    </PageWrap>
  );
};

export default LocationPage;
