import { useReducer } from "react";
import { useRoutes } from "react-router-dom";
import { ROUTES } from "./routes.tsx";
import {
  pokeBookContext,
  pokeBookDispatchContext,
  pokeBookReducer,
  initialState,
} from "./contexts/PokeBookContext.ts";

const App = () => {
  const routes = useRoutes(ROUTES);
  const [state, dispatch] = useReducer(pokeBookReducer, initialState);

  return (
    <pokeBookContext.Provider value={state}>
      <pokeBookDispatchContext.Provider value={dispatch}>
        {routes}
      </pokeBookDispatchContext.Provider>
    </pokeBookContext.Provider>
  );
};

export default App;
