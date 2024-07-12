import Character from '@/components/Character/Character';
import PageWrap from '@/components/PageWrap/PageWrap';

type CharacterPageProps = {
  params: {
    id: string;
  };
};

const CharacterPage = async ({ params: { id } }: CharacterPageProps) => {
  return (
    <PageWrap>
      <Character id={id} />
    </PageWrap>
  );
};

export default CharacterPage;
