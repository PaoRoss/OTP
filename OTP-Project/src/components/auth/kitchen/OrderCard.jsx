import "../../../stylesheets/OrderCard.css";
import React from "react";
import Button from "../../generalComponents/Button";
import { updateOrderStatus } from "../../generalComponents/httpRequests";

function OrderCard({ order }) {
  function handleDoneButton(){
     updateOrderStatus(order.id)
     console.log(order.id)
  }
 
  return (
    <div className="order-card">
      <div className="order-info">
        <p className="order id"> {`Order ID: ${order.id}`} </p>
        <p className="order date"> {`Date: ${order.dateEntry}`} </p>
        <p className="order customer-name">
          {`Customer's Name: ${order.client}`}
        </p>
      </div>
      <div className="order-items">
        {order.products.map((item) => {
          return (
            <>
              <p className="order-product">
                {`${item.qty} ${item.product.name}`}
              </p>
            </>
          );
        })}
      </div>
      <Button filter={handleDoneButton} name="Done" secondclass="kitchen-done" />
    </div>
  );
      }

export default OrderCard;
