import {
  createBrowserRouter,
} from 'react-router-dom';
// import Welcome from './Welcome';
import Menu from './waiter/TakeOrder';
import Admin from './admin/Admin';

export const routerAuth = ( user ) => {
  return createBrowserRouter([
  {
    path: '/',
    element: <Menu user={user} />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
]);
}
