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
  const [rol, setRol] = useState(null);
  // user:¨
  // {email, rol}
  // use efect setUser  'kini@perrito.net'
  const changeUser = (userEmail, rol) => {
    //aqui la logica de la funcion
    console.log(userEmail);
    setUser(userEmail);
    setRol(rol)
    console.log(rol)
  };
  //useEffect(() =>{},[])
  return (
    <>
      {user ? <RouterProvider router={routerAuth(user)}   /> : <RouterProvider router={routerNoAuth(changeUser)} />}
   {/*<RouterProvider router={routerAuth(user)}   />*/}   
   </>
  );
}

export default App;
