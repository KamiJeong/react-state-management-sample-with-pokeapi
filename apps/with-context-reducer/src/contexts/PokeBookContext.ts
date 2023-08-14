import { createContext, Dispatch } from "react";
import { PokeAPI } from "pokeapi-types";

type StateType = { list: PokeAPI.Pokemon[] };

type ActionType =
  | {
      type: "ADD";
      payload: PokeAPI.Pokemon;
    }
  | { type: "REMOVE"; payload: number };

export const initialState: StateType = {
  list: [],
};

export const pokeBookReducer = (
  state: StateType,
  action: ActionType,
): StateType => {
  switch (action.type) {
    case "ADD":
      return { list: [...state.list, action.payload] };
    case "REMOVE":
      return { list: state.list.filter(({ id }) => id !== action.payload) };
    default:
      return state;
  }
};

export const pokeBookContext = createContext(initialState);
export const pokeBookDispatchContext =
  createContext<Dispatch<ActionType> | null>(null);
