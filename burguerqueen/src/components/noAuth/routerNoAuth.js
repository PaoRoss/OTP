import LoginRapido from "./LoginRapido";
import {
    createBrowserRouter,
  } from "react-router-dom";

export const routerNoAuth = createBrowserRouter([
    {
      path: "/",
      element: <LoginRapido />
    },
  ]);