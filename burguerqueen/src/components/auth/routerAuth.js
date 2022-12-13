import { createBrowserRouter } from "react-router-dom";
// import Welcome from './Welcome';
import Menu from "./waiter/TakeOrder";
import Admin from "./admin/Admin";
import Kitchen from "./kitchen/Kitchen";

export const routerAuth = (user, role, changeUser) => {
  console.log(user);
  if (role === false) {
    return createBrowserRouter([
     /* {
        path: "/",
        element: <Menu user={user} changeUser={changeUser} />,
      },*/
      {
        path: "/",
        element: <Kitchen user={user} changeUser={changeUser} />,
      }
    ]);
  } else {
    return createBrowserRouter([
      {
        path: "/",
        element: <Admin user={user} changeUser={changeUser} />,
      }
    ]);
  }
};

// Antes --si quieren lo pueden borrar después--
//   return createBrowserRouter([
//   {
//     path: '/',
//     element: <Menu user={user} />,
//   },
//   {
//     path: '/admin',
//     element: <Admin user={user}/>,
//   },
// ]);
