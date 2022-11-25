import '../../../stylesheets/ProductCard.css'
import React from 'react';

function ProductCard(props) {
    return(
        <div className="product-card">
           <p className="product-id"> {props.id} </p>
           <p className="product-name">{props.name}</p>
           <p className="product-price">{props.price}</p>
        </div>
    )
}

export default ProductCard;
