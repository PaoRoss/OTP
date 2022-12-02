import React from 'react';
import ProductCard from './ProductCard';
import OrderDetails from './OrderDetails';
import '../../../stylesheets/TakeOrder.css';
import NavBar from '../../generalComponents/NavBar';
import Button from '../../generalComponents/Button';
import SendButton from '../../generalComponents/SendButton';

function Menu({ user }) {
  return (
    <div className='menuContainer'>
      <NavBar />
      <main className='menu'>
        <section className='options-menu'>
          <Button
            name='Breakfast'
            secondclass='left' />
          <Button 
            name='Lunch & Dinner'
            secondclass='right' />
          <div className='lineOne' />
        </section>
        <div className='product-card-container'>
          <ProductCard 
            id='1'
            name='American Coffe'
            price='$10.00' />
          <ProductCard
            id='2'
            name='Coffe with Milk'
            price='$07.00' />
          <ProductCard
            id='3'
            name='Ham & cheese sandwich'
            price='$10.00' />
          <ProductCard
            id='4'
            name='Natural juice'
            price='$07.00' />
        </div>
        <img className='logo-person' src={require('../../../images/person-pin.png')} alt='Person icon' />
        <p className='waiter-name'>{user}</p>
      </main>
      <section className='order-summary-container'>
        <h3 className='order-summary-text'>Order summary</h3>
        <div className='input-customer-name'>
          <label>Customer's Name </label>
          <input className='customer-name-input' type='text'></input>
        </div>
        <div className='order-description'>
          <table>
            <thead>
              <tr>
                <th> QTY </th>
                <th className='style-name-column'> Name </th>
                <th> Price </th>
                <th className='style-delete-column'> Delete </th>
              </tr>
            </thead>
            <OrderDetails
              qty='2'
              name='Simple Hamburger'
              price='20.00' />
          </table>
          <p className='price'> Total price</p>
          <p className='number-price'>$ 20.00</p>
          <SendButton 
            name='Send to kitchen'
            secondclass='orders' />
        </div>
      </section>
    </div>
  );
}

export default Menu;
