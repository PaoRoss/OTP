import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import OrderDetails from './OrderDetails';
import '../../../stylesheets/TakeOrder.css';
import NavBar from '../../generalComponents/NavBar';
import Button from '../../generalComponents/Button';
import SendButton from '../../generalComponents/SendButton';
import axios from 'axios';

function Menu({ user }) {
  const [breakfast, setBreakfast] = useState(null)
  const [dinner, setDinner] = useState(null)

  useEffect(()=>{
    getMenuBreakfast()
    getMenuDinner()
  },[])

  const  getMenuBreakfast = async() => {
    let request = await axios.get('https://6376d05f81a568fc25067c85.mockapi.io/api/bq6/products?type=breakfast')
    setBreakfast(request)
  }
  const  getMenuDinner = async() => {
    let request = await axios.get('https://6376d05f81a568fc25067c85.mockapi.io/api/bq6/products?type=lunch')
    setDinner(request)
  }
  
  const [optionFood, setOptionFood] = useState('breakfast')

  function changeMenu(e) {
    // obtener que boton se esta clickeando
    // cambiar el estado de opcionFood, dependiendo del boton clickeado
    if(e.target.value === 'breakfast'){
      setOptionFood('breakfast')
      console.log('breakfast')
    }
    if(e.target.value === 'dinner'){
      setOptionFood('dinner')
      console.log('dinner')
    }
  }
/*function productList() {
   const listItems = breakfast.map((item) =>
    <ProductCard key={item.id.toString()} id={item.id} name={item.name} price={item.price} />
  )
  console.log(listItems)
}*/

  // crear una funcion que cambie la opcionfoot para comida o desayuno
  // renderizado condicional optionFood == breakfast 

  // .map 
  return (
    <div className='menuContainer'>
      <NavBar />
      <main className='menu'>
        <section className='options-menu'>
          <Button
           filter = {changeMenu}
           value = 'breakfast'
            name='Breakfast'
            secondclass='left' />
          <Button 
            filter = {changeMenu}
            value = 'dinner'
            name='Lunch & Dinner'
            secondclass='right' />
          <div className='lineOne' />
        </section>
        <div className='product-card-container'>
          {optionFood === 'breakfast' ?  {productList} : <ProductCard name='dinner' /> }
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
