export type PokemonData = {
  name: string;
  type: string;
  description: string;
  evolutions: Evolutions[];
};

type Evolutions = {
  name: string;
  type: string;
};
