// import queen from './queen.png';
import './App.css';
import {useState} from 'react'
import {
  RouterProvider,
  Route,
} from "react-router-dom";
import { routerNoAuth } from './components/noAuth/routerNoAuth';
import {routerAuth} from './components/auth/routerAuth'


function App() {
  const [user, setUser]= useState(null)
  //use efect setUser
  return (
   <div> {user?<RouterProvider router={routerAuth} />:<RouterProvider router={routerNoAuth} />}</div>
    /*
    <div className="App">
      <header className="App-header">
        <img src={queen} className="App-logo" alt="logo" />
        <p className="App-orange">
          Burger Queen WorkSpace
        </p>
        <p>
          Coming soon ... 
        </p>
      </header>
    </div>*/
  );
}

export default App;
