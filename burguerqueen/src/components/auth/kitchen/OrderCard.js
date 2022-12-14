import "../../../stylesheets/OrderCard.css";
import React from "react";
import Button from "../../generalComponents/Button";

function OrderCard({ order }) {
  //function addProduct() {
  // addItem(item);
  //}
  return (
    <div className="order-card">
      <div className="order-info">
        <p className="order-id"> {`Order ID: ${order.id}`} </p>
        <p className="order-date"> {`Date: ${order.dateEntry}`} </p>
        <p className="customer-name"> {`Customer's Name: ${order.client}`} </p>
      </div>
      <div className="order-items">
        {order.products.map((item) => {
          return (
            <>
              <p className="order-product">
                {" "}
                {`${item.qty} ${item.product.name}`}{" "}
              </p>
            </>
          );
        })}
      </div>
      <Button filter={order.name} name="Done" secondclass="kitchen-done" />
    </div>
  );
}

export default OrderCard;
