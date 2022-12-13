// import queen from './queen.png';
import './App.css';
import { useState, useEffect } from 'react';
import {
  RouterProvider,
  Route,
} from 'react-router-dom';
import { routerNoAuth } from './components/noAuth/routerNoAuth';
import { routerAuth } from './components/auth/routerAuth';

function App() {
  const [user, setUser] = useState(null);
  const [roleAdmin, setRoleAdmin] = useState(null);
  const [roleWaiter, setRoleWaiter] = useState(null);
  // user:¨
  // {email, rol}
  // use efect setUser 
  const changeUser = (userEmail, roleAdmin, roleWaiter) => {
    //aqui la logica de la funcion
    console.log(userEmail);
    setUser(userEmail);
    setRoleAdmin(roleAdmin)
    setRoleWaiter(roleWaiter)
  };
  //useEffect(() =>{},[])
  return (
    <>
      {user ? <RouterProvider router={routerAuth(user, roleAdmin, roleWaiter, changeUser)}   /> : <RouterProvider router={routerNoAuth(changeUser)} />}
   </>
  );
}

export default App;
