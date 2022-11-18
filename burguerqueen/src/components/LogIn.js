import React from 'react';
//import queen from '../images/queen.png'
//import restaurant from '../images/restaurant.svg'
import "../stylesheets/Login.css"


function Login() {

  function h() {
    const userValue = document.getElementById('username').value;
    const passwordValue = document.getElementById('password').value;

    if(userValue.length < 6 || passwordValue.length < 6){
      console.log("Ingresaste las credenciales correctas??")
    } else if(userValue.includes('@')){
      console.log("Felicidades,",userValue,"si trabajas en la mejor empresa del mundo mundial");
    } else {
      ("Lo sentimos,", userValue,"creo que no trabajas en la mejor empresa del mundo mundial o, intentalo de nuevo");
    }
    
  }

  return (
    <div className="login-container">
      <img className="restaurant-image" src={require("../images/restaurant.png")} alt="Restaurant" />
      <img className="logo" src={require("../images/queen.png")} alt="Logo" />
      <h1 className="welcome-letters" >Welcome back to Burguer Queen</h1>
      <p className="enter-details" >Please enter your details.</p>
      <input className="username" id="username" placeholder="User name"></input>
      <input className="password" id="password" type="password" placeholder="Password"></input>
      <button className="login-button" type="submit" onClick={() => h()}>Login</button>
    </div>
  )
}

export default Login;