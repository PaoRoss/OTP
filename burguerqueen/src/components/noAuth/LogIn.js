import React from 'react';
//import queen from '../images/queen.png'
//import restaurant from '../images/restaurant.svg'
import '../../stylesheets/Login.css';
import { getUser } from '../getUsers';
import { useState } from 'react'


function Login(props) {

  const [user, setUser] = useState('')
  const handleChange = e =>{
    e.preventDefault();
    setUser(e.target.value);
    //console.log(e.target.value)
  }

  const handleLogin = () => {
    //console.log(e.target.value);
    // const userValue = document.getElementById('username').value;
    // console.log(userValue);
    // changeUser();
    const email = getUser();
    const x = email.then(response => response.map(e => e.email))
   x.then(response => {
      if(response.includes(user)){
        console.log('Gracias por venir a trabajar')
        props.changeUser(user);
        
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
      <input className='username' id='username' placeholder='Username' onChange={handleChange}></input>
      <input className='password' id='password' type='password' placeholder='Password'></input>
      <button className='login-button' type='submit' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login;