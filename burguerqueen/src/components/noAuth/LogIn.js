import React from 'react';
//import queen from '../images/queen.png'
//import restaurant from '../images/restaurant.svg'
import '../../stylesheets/Login.css'
import { getUser } from '../getUsers.js';


function Login() {

  function h() {
    const userValue = document.getElementById('username').value;
    const passwordValue = document.getElementById('password').value;

    const email = getUser();
    const x = email.then(response => response.map(e => e.email))
    /*const x = email.then(response => response.forEach(e => {
      console.log(e.email, e.roles)
      if(e.email.includes(userValue) && e.roles === false){
        console.log('Gracias por venir a trabajar, no eres admin')
      }else{
        console.log('Tu ni siquiera trabajas aquí')
      }
     }))*/
   x.then(response => {
      if(response.includes(userValue)){
        console.log('Gracias por venir a trabajar')
      }else{
        console.log('Tu ni siquiera trabajas aquí')
      }
    })
  }

  return (
    <div className='login-container'>
      <img className='restaurant-image' src={require('../../images/restaurant.png')} alt='Restaurant' />
      <img className='logo' src={require('../../images/queen.png')} alt='Logo' />
      <h1 className='welcome-letters' >Welcome back to Burguer Queen</h1>
      <p className='enter-details' >Please enter your details.</p>
      <input className='username' id='username' placeholder='User name'></input>
      <input className='password' id='password' type='password' placeholder='Password'></input>
      <button className='login-button' type='submit' onClick={() => h()}>Login</button>
    </div>
  )
}

export default Login;