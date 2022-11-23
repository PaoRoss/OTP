//import LoginRapido from "./LoginRapido";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../noAuth/LogIn.js";

export const routerNoAuth = createBrowserRouter([
    {
      path: "/",
   //   element: <LoginRapido />
     element: <Login />
    },
  ]);