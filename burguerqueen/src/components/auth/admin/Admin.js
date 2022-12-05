import React from 'react';
import '../../../stylesheets/Admin.css';
import Button from '../../generalComponents/Button';
import NavBar from '../../generalComponents/NavBar';
import SendButton from '../../generalComponents/SendButton';
import '../../../stylesheets/TakeOrder.css'


function Admin({user}) {
  return (
    <div className='adminContainer'>
      <NavBar />
      <main className='table'>
        <section className='options-table'>
        <Button
            name='Add new user'
            secondclass='left' />
          <Button
            name='Add new product' 
            secondclass='right'/>
          <div className='lineOne' />
        </section>
        <div className='add-container'>
            <h3 className='instructions-to-add'> Add the information required </h3>
            <label className='label-user-name'>User name:</label>
            <input className='user-name-input' type='text'></input>
            <label className='label-credencial-name'>User credencial:</label>
            <input className='user-credencial-input' type={'email'}></input>
            <SendButton 
            name='Create user'
            secondclass='admin' />
        </div>
        <img className='logo-person' src={require('../../../images/person-pin.png')} alt='Person icon' />
        <p className='admin-name'>{user}</p>
      </main>
      <section className='current-user-container'>
        <div className='input-customer-name'>
          <h3 className='current-user-text'>Current users</h3>
        </div>
        <div className='user-description'>
          <table>
            <tr>
              <th>ID </th>
              <th className='table-user'> User </th>
              <th> Role </th>
              <th> Edit </th>
              <th> Delete </th>
            </tr>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Admin;