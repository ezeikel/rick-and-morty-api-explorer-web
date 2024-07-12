type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    id: string;
    name: string;
    type: string;
    dimension: string;
    residents: Array<{ id: string; name: string; image: string }>;
    created: string;
  };
  location: {
    id: string;
    name: string;
    type: string;
    dimension: string;
    residents: Array<{ id: string; name: string; image: string }>;
    created: string;
  };
  image: string;
  episode: Array<{
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: Array<{ id: string; name: string; image: string }>;
    created: string;
  }>;
  created: string;
};

export type CharacterData = {
  character: Character;
};

export type CharacterVars = {
  id: string;
};
