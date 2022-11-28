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
  // use efect setUser
  const changeUser = () => {
    //aqui la logica de la funcion
    setUser('Pao')
  }
  useEffect(() =>{},[])
  return (
    <div>
      {' '}
      {user ? <RouterProvider router={routerAuth(user)} /> : <RouterProvider router={routerNoAuth(changeUser)} />}
    </div>
  );
}

export default App;
