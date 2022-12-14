import React, { useEffect, useState } from "react";
import "../../../stylesheets/Kitchen.css";
import NavBar from "../../generalComponents/NavBar";
import OrderCard from "./OrderCard";
import { getPendingOrders } from "../../generalComponents/httpRequests";

function Kitchen({ user, changeUser }) {
  //Variable de estado
  const [pendingOrders, setPendingOrders] = useState([]);

  //useEffect
  useEffect(() => {
    orders();
  }, []);

  const orders = async () => {
    let request = await getPendingOrders();
    setPendingOrders(request.data);
  };
  console.log(pendingOrders);

  return (
    <div className="kitchenContainer">
      <NavBar changeUser={changeUser} />
      <main className="cards-order-container">
        {pendingOrders.map((element) => {
          return <OrderCard order={element} />;
        })}
      </main>
      <img
        className="logo-person"
        src={require("../../../images/person-pin.png")}
        alt="Person icon"
      />
      <p className="chef-name">{user}</p>
    </div>
  );
}

export default Kitchen;
