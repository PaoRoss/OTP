// import queen from './queen.png';
import './App.css';
import { useState } from 'react';
import {
  RouterProvider,
  Route,
} from 'react-router-dom';
import { routerNoAuth } from './components/noAuth/routerNoAuth';
import { routerAuth } from './components/auth/routerAuth';

function App() {
  const [user, setUser] = useState(null);
  // use efect setUser
  return (
    <div>
      {' '}
      {user ? <RouterProvider router={routerAuth(user, setUser)} /> : <RouterProvider router={routerNoAuth} />}
    </div>
  );
}

export default App;
