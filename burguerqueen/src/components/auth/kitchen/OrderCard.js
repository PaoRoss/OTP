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
                <p className="order-id"> {order.id} </p>
                <p className="order-date">{order.dateEntry}</p>
                <p className="customer-name">{order.client}</p>
            </div>
            <div>
                {order.products}
            </div>
            <Button
                filter={order.name}
                name="Done"
                secondclass="kitchen-done" />
        </div>
    );
}

export default OrderCard;