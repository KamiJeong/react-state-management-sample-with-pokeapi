import { PokeAPI } from "pokeapi-types";

const TOTAL_POKEMONS = 500;

const getRandomId = () => Math.floor(Math.random() * (TOTAL_POKEMONS + 1));

export const getRandom5Pokemons = async (): Promise<PokeAPI.Pokemon[]> => {
  const list: PokeAPI.Pokemon[] = [];
  let i = 0;
  while (i < 5) {
    const data = await getPokemonById(getRandomId());

    if (!list.find((row) => row.id === data.id)) {
      list.push(data);
      i += 1;
    }
  }
  return list;
};

export const getPokemonById = async (id: number): Promise<PokeAPI.Pokemon> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res.json();
};
