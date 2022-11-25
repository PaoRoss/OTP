import {
  createBrowserRouter,
} from 'react-router-dom';
// import Welcome from "./Welcome";
import Menu from './waiter/TakeOrder';
import Admin from './admin/Admin';

export const routerAuth = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
]);
