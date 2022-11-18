import React from 'react';
//import queen from '../images/queen.png'
//import restaurant from '../images/restaurant.svg'
import "../stylesheets/Login.css"

function Login (){
    return(
        <div className="login-container">
            <img className="restaurant-image" src={require("../images/restaurant.png")} alt="Restaurant" />
            <img className="logo" src={require("../images/queen.png")} alt="Logo"/>
            <h1 className="welcome-letters" >Welcome back to Burguer Queen</h1>
            <p className="enter-details" >Please enter your details.</p>
            <input className="username" placeholder="User name"></input>
            <input className="password" type="password" placeholder="Password"></input>
            <button className="login-button" type="submit">Login</button>
        </div>
    )
}

export default Login;