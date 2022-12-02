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
  const [role, setRole] = useState(null);
  // user:¨
  // {email, rol}
  // use efect setUser 
  const changeUser = (userEmail, role) => {
    //aqui la logica de la funcion
    console.log(userEmail);
    setUser(userEmail);
    setRole(role)
    console.log(role)
  };
  //useEffect(() =>{},[])
  return (
    <>
      {user ? <RouterProvider router={routerAuth(user, role)}   /> : <RouterProvider router={routerNoAuth(changeUser)} />}
   </>
  );
}

export default App;
