import React from 'react';
import ProductCard from './ProductCard';
import OrderDetails from './OrderDetails';
import '../../../stylesheets/TakeOrder.css';
import '../../../stylesheets/OrderDetails.css';

function Menu({user}) {
  return (
    <div className='menuContainer'>
      <nav className='superiorNav'>
        <img className='logo-logout' src={require('../../../images/logout.png')} alt='Logout' />
        <button className='logout-button'>Logout</button>
        <img className='logo-waiter-layout' src={require('../../../images/queen.png')} alt='Logo' />
      </nav>
      <main className='menu'>
        <section className='options-menu'>
          <button className='breakfast-button' type='submit' onClick={() => x()}>Breakfast</button>
          <button className='lunch-dinner-button' type='submit' onClick={() => x()}>Lunch & dinner</button>
          <div className='lineOne' />
        </section>
        <div className='product-card-container'>
          <ProductCard
            id='1'
            name='American Coffe'
            price='$10.00'
          />
          <ProductCard
            id='2'
            name='Coffe with Milk'
            price='$07.00'
          />
          <ProductCard
            id='3'
            name='Ham & cheese sandwich'
            price='$10.00'
          />
          <ProductCard
            id='4'
            name='Natural juice'
            price='$07.00'
          />
        </div>
        <img className='logo-person' src={require('../../../images/person-pin.png')} alt='Person icon' />
        <p className='waiter-name'>{user}</p>
      </main>
      <section className='order-summary-container'>
        <h3>Order summary</h3>
        <div className='input-customer-name'>
          <label>Customer's Name </label>
          <input className='customer-name-input' type='text'></input>
        </div>
        <div className='order-description'>
          <table>
            <tr>
              <th> QTY </th>
              <th> Name </th>
              <th> Price </th>
              <th> Delete </th>
            </tr>
          </table>
          <OrderDetails
            qty='2'
            name='Simple Hamburger'
            price='20.00' />
          <p className='price'> Total price</p> 
          <p className='number-price'>$ 20.00</p> 
          <button className='send-to-kitchen-button' type='submit' onClick={() => x()}>Send to kitchen</button>
        </div>
      </section>
    </div>
  );
}

export default Menu;
