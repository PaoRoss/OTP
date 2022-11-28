//import LoginRapido from './LoginRapido';
import {
    createBrowserRouter,
  } from 'react-router-dom';
import Login from '../noAuth/LogIn';

export const routerNoAuth = ({changeUser}) => {
  return createBrowserRouter([
    {
      path: '/',
   //   element: <LoginRapido />
     element: <Login changeUser={changeUser} />
    },
  ]);
};