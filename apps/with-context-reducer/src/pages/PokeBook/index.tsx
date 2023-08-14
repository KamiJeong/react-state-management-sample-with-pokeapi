import { useContext } from "react";
import { pokeBookContext } from "../../contexts/PokeBookContext.ts";
import tx from "twin.macro";
import { Card } from "design-system";

const PokeBook = () => {
  const { list } = useContext(pokeBookContext);

  return (
    <div css={[tx`flex flex-wrap justify-center items-center gap-5`]}>
      {list.map(
        ({ id, species: { name }, sprites: { front_default }, abilities }) => (
          <Card
            key={id}
            img={front_default}
            name={name}
            description={abilities.map((row) => row.ability.name).join(", ")}
            noActions
          />
        ),
      )}
    </div>
  );
};

export default PokeBook;
