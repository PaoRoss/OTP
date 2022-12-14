import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import OrderDetails from "./OrderDetails";
import "../../../stylesheets/TakeOrder.css";
import NavBar from "../../generalComponents/NavBar";
import Button from "../../generalComponents/Button";
import SendButton from "../../generalComponents/SendButton";
import axios from "axios";
import { createOrder } from "../../generalComponents/httpRequests";
import ReactModal from "react-modal";
//import { Modalex } from "../../generalComponents/Modalex";

function Menu({ user, changeUser }) {
  //al renderizar el componente se obtiene la data del menú de la API
  // y se le asigna el valor a la variable del Hook
  const [breakfast, setBreakfast] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [order, setOrder] = useState([]);
  const [clientName, setClientName] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getMenuBreakfast();
    getMenuDinner();
  }, []);

  const getMenuBreakfast = async () => {
    let request = await axios.get(
      "https://6376d05f81a568fc25067c85.mockapi.io/api/bq6/products?type=breakfast"
    );
    setBreakfast(request.data);
  };
  const getMenuDinner = async () => {
    let request = await axios.get(
      "https://6376d05f81a568fc25067c85.mockapi.io/api/bq6/products?type=lunch"
    );
    setDinner(request.data);
  };

  //Se cambia el estado de optionFood al apretar el boton para el renderizado condicional
  const [optionFood, setOptionFood] = useState("breakfast");

  function changeMenu(e) {
    if (e.target.value === "breakfast") {
      setOptionFood("breakfast");
      console.log(breakfast);
    }
    if (e.target.value === "dinner") {
      setOptionFood("dinner");
      console.log(dinner);
    }
  }

  //Funciones que renderizan/muestra un componente por cada elemento del menu de la API

  function addItem(item) {
    if (!order.find((element) => element.product.id === item.id)) {
      const updatedOrder = [...order, { product: item, qty: 1 }];
      setOrder(updatedOrder);
    } else {
      setOrder(
        order.map((element) =>
          element.product.id === item.id
            ? { ...element, qty: element.qty + 1 }
            : element
        )
      );
    }
  }
  function removeItem(item) {
    order.find((element) => element.product.id === item.product.id);
    setOrder(
      order.map((element) =>
        element.product.id === item.product.id
          ? { ...element, qty: element.qty - 1 }
          : element
      )
    );
  }
  function deleteItem(item) {
    const filterItem = order.filter(
      (element) => element.product.id !== item.product.id
    );
    setOrder(filterItem);
  }
  console.log(order);

  const total = () => {
    return order.reduce((acc, item) => acc + item.qty * item.product.price, 0);
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setClientName(e.target.value);
  };

  const setDefaultValues = () => {
    setOrder([]);
    setClientName("");
  };
  const showModal = (e) => {
    e.preventDefault()
    setModal(true);
}
  const handleOrderInformation = (e) => {
   e.preventDefault();
    const orderInfo = {
      userId: user,
      client: clientName,
      products: order,
      total: total(),
      status: "pending",
      dateEntry: new Date(),
    };

   const promise = createOrder(orderInfo);
    promise.then((response) => {
      setDefaultValues()
      closemodal()
    });

  };


const closemodal = () => {
    setModal(false);
    console.log(modal)
};
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#F0AA89'      
  }
};
  return (
    <div className="menuContainer">
      <NavBar changeUser={changeUser} />
      <main className="menu">
        <section className="options-menu">
          <Button
            filter={changeMenu}
            value="breakfast"
            name="Breakfast"
            secondclass="left"
          />
          <Button
            filter={changeMenu}
            value="dinner"
            name="Lunch & Dinner"
            secondclass="center"
          />
          <div className="lineOne" />
        </section>
        <div className="product-card-container">
          <>
            {optionFood === "breakfast"
              ? breakfast.map((item) => {
                  return (
                    <ProductCard
                      key={item.id.toString()}
                      addItem={addItem}
                      item={item}
                      state={order}
                    />
                  );
                })
              : dinner.map((item) => {
                  return (
                    <ProductCard
                      key={item.id.toString()}
                      addItem={addItem}
                      item={item}
                      state={order}
                    />
                  );
                })}
          </>
        </div>
        <img
          className="logo-person"
          src={require("../../../images/person-pin.png")}
          alt="Person icon"
        />
        <p className="waiter-name">{user}</p>
      </main>
      <section className="order-summary-container">
        <h3 className="order-summary-text">Order summary</h3>
       <form onSubmit={showModal}>
          <div className="input-customer-name">
            <label>Customer's Name </label>
            <input
              className="customer-name-input"
              type="text"
              onChange={handleChange}
              value={clientName}
            ></input>
          </div>
          <div className="order-container">
            <div className="order-description">
              <table>
                <thead>
                  <tr>
                    <th> QTY </th>
                    <th className="style-name-column"> Name </th>
                    <th> Price </th>
                    <th className="style-delete-column"> Delete </th>
                  </tr>
                </thead>
                <>
                  {order != []
                    ? order.map((item) => {
                        return (
                          <OrderDetails
                            key={item.product.id.toString()}
                            qty={item.qty}
                            item={item}
                            name={item.product.name}
                            price={item.product.price}
                            removeItem={removeItem}
                            deleteItem={deleteItem}
                          />
                        );
                      })
                    : console.log("no hay nada")}
                </>
              </table>
            </div>
            <p className="price"> Total price </p>
            <p className="number-price">$ {total()}.00</p>
            <SendButton
              name="Send to kitchen"
              secondclass="orders"
            />
            <ReactModal isOpen={modal} className="Modal" overlayClassName="Overlay" ariaHideApp={false}> 
            <h2 className="modal-text">Do you want to send this order to the kitchen?</h2>
            <button className="modal-button-left" onClick={handleOrderInformation}>YES</button>
              <button className="modal-button-right"onClick={closemodal}>NO</button>
              </ReactModal> 
          </div>
        </form>
      </section>
    </div>
  );
}

export default Menu;
