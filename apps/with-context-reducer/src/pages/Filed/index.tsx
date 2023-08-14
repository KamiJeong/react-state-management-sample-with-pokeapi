import { Fragment, useContext } from "react";
import { useQuery } from "react-query";
import { Card } from "design-system";
import tx from "twin.macro";

import { getRandom5Pokemons } from "../../services/pokeapi.service";
import { pokeBookDispatchContext } from "../../contexts/PokeBookContext.ts";
import { PokeAPI } from "pokeapi-types";

const Filed = () => {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getRandom5Pokemons,
  });
  const dispatch = useContext(pokeBookDispatchContext);

  const onCatch = (pokemon: PokeAPI.Pokemon) =>
    dispatch?.({ type: "ADD", payload: pokemon });

  if (isLoading) return <div>isLoading......</div>;

  if (isError || !data) return <div>isError......</div>;

  return (
    <Fragment>
      <div css={[tx`flex flex-wrap justify-end items-center gap-5 py-5 px-10`]}>
        <button
          type="button"
          onClick={() => refetch()}
          css={[tx`px-5 py-3 bg-white text-black rounded`]}
        >
          Reload
        </button>
      </div>
      <div css={[tx`flex flex-wrap justify-center items-center gap-5`]}>
        {data.map(
          (
            { id, species: { name }, sprites: { front_default }, abilities },
            index,
          ) => (
            <Card
              key={id}
              img={front_default}
              name={name}
              description={abilities.map((row) => row.ability.name).join(", ")}
              onCatch={() => onCatch(data[index])}
            />
          ),
        )}
      </div>
    </Fragment>
  );
};

export default Filed;
