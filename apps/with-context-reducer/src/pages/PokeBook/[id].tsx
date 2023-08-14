import { useParams } from "react-router-dom";

const PokeBookById = () => {
  const { pokeId } = useParams();

  return <div>{pokeId}</div>;
};

export default PokeBookById;
