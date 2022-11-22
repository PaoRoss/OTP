
import {
    createBrowserRouter,
  } from "react-router-dom";
import Welcome from "./Welcome";
import Admin from './admin/Admin'

export const routerAuth = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />
    },
    {
        path: "/admin",
        element: <Admin />
      },
  ]);