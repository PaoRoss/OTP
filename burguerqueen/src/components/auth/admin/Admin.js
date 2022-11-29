import React from 'react';
import '../../../stylesheets/Admin.css';


function Admin({user}) {
  return (
    <div className='adminContainer'>
      <nav className='superiorNav'>
        <img className='logo-logout' src={require('../../../images/logout.png')} alt='Logout' />
        <button className='logout-button'>Logout</button>
        <img className='logo-admin-layout' src={require('../../../images/queen.png')} alt='Logo' />
      </nav>
      <main className='table'>
        <section className='options-table'>
          <button className='add-user-button' type='submit' onClick={() => x()}>Add new user</button>
          <button className='add-product-button' type='submit' onClick={() => x()}>Add new product</button>
          <div className='lineOne' />
        </section>
        <div className='add-container'>
            <h3 className='instructions-to-add'> Add the information required </h3>
            <label className='label-user-name'>User Name </label>
            <input className='user-name-input' type='text'></input>
            <label className='label-credencial-name'>User Credencial </label>
            <input className='user-credencial-input' type={'email'}></input>
            <button className='create-user-button' type='submit' onClick={() => x()}>Create User</button>
        </div>
        <img className='logo-person' src={require('../../../images/person-pin.png')} alt='Person icon' />
        <p className='admin-name'>{user}</p>
      </main>
      <section className='current-user-container'>
        <div className='input-customer-name'>
          <h3 className='current-user-text'>Current Users </h3>
        </div>
        <div className='user-description'>
          <table>
            <tr>
              <th>ID </th>
              <th> User </th>
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