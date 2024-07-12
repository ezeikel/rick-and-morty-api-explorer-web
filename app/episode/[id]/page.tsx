import Episode from '@/components/Episode/Episode';
import PageWrap from '@/components/PageWrap/PageWrap';

type EpisodePageProps = {
  params: {
    id: string;
  };
};

const CharacterPage = async ({ params: { id } }: EpisodePageProps) => {
  return (
    <PageWrap>
      <Episode id={id} />
    </PageWrap>
  );
};

export default CharacterPage;
