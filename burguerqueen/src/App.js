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
  const [user, setUser] = useState('Pao');
  // use efect setUser
  const changeUser = (userEmail) => {
    //aqui la logica de la funcion
    setUser(userEmail);
    //console.log('hello')
  };
  //useEffect(() =>{},[])
  return (
    <>
      {user ? <RouterProvider router={routerAuth(user)} /> : <RouterProvider router={routerNoAuth(changeUser)} />}
    </>
  );
}

export default App;
