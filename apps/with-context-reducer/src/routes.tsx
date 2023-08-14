import { RouteObject } from "react-router-dom";
import Layout from "./features/Layout";
import Home from "./pages/Home";
import Filed from "./pages/Filed";
import PokeBook from "./pages/PokeBook";
import PokeBookById from "./pages/PokeBook/[id]";

export const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/filed", element: <Filed /> },
      {
        path: "/pokebook",
        element: <PokeBook />,
      },
      {
        path: "/pokebook/:pokeId",
        element: <PokeBookById />,
      },
    ],
  },
];
