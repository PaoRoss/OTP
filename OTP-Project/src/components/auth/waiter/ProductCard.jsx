import "../../../stylesheets/ProductCard.css";
import React from "react";

function ProductCard({ item, addItem }) {
  function addProduct() {
    addItem(item);
  }
  return (
    <div className="product-card" onClick={addProduct}>
      <p className="product-id"> {item.id} </p>
      <p className="product-name">{item.name}</p>
      <p className="product-price">$ {item.price}</p>
    </div>
  );

}

export default ProductCard;
