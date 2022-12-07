import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import OrderDetails from './OrderDetails';
import '../../../stylesheets/TakeOrder.css';
import NavBar from '../../generalComponents/NavBar';
import Button from '../../generalComponents/Button';
import SendButton from '../../generalComponents/SendButton';
import axios from 'axios';

function Menu({ user }) {

  //al renderizar el componente se obtiene la data del menú de la API 
  // y se le asigna el valor a la variable del Hook
  const [breakfast, setBreakfast] = useState([])
  const [dinner, setDinner] = useState([])

  useEffect(()=>{
    getMenuBreakfast()
    getMenuDinner()
  },[])

  const  getMenuBreakfast = async() => {
    let request = await axios.get('https://6376d05f81a568fc25067c85.mockapi.io/api/bq6/products?type=breakfast')
    setBreakfast(request.data)
  }
  const  getMenuDinner = async() => {
    let request = await axios.get('https://6376d05f81a568fc25067c85.mockapi.io/api/bq6/products?type=lunch')
    setDinner(request.data)
  }
  
  //Se cambia el estado de ptionFood al apretar el boton para el renderizado condicional
  const [optionFood, setOptionFood] = useState('breakfast')

  function changeMenu(e) {
    if(e.target.value === 'breakfast'){
      setOptionFood('breakfast')
      console.log(breakfast)
    }
    if(e.target.value === 'dinner'){
      setOptionFood('dinner')
      console.log(dinner)
    }
  }

  //Funciones que renderizan/muestra un componente por cada elemento del menu de la API
  const [order, setOrder] = useState([])
    console.log(order);
  function productListBreakfast() {
    return breakfast.map((item)=> {
          return (
            <ProductCard key={item.id.toString()} id={item.id} name={item.name} price={item.price} addItem={setOrder} info={item} state={order}/>
            )
        })
  }

  function productListDinner() {
    return dinner.map((item)=> {
          return (
            <ProductCard key={item.id.toString()} id={item.id} name={item.name} price={item.price} addItem={setOrder} info={item} state={order} />
            )
        })
  }

  function showOrderItems(){
    return order.map((item)=> {
      return (
        <OrderDetails qty={"1"} name={item.name} price={item.price} />
      )
    })
  }

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
            secondclass='center' />
          <div className='lineOne' />
        </section>
        <div className='product-card-container'>
        <>
          {optionFood === 'breakfast' ? productListBreakfast() : productListDinner() }
        </>
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
            <>
            {order != [] ? showOrderItems() : console.log('no hay nada') }
            </>
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
