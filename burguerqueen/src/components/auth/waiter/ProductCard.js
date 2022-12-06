import '../../../stylesheets/ProductCard.css'
import React from 'react';

function ProductCard(props) {
    return(
        <div className='product-card' onClick={props.addItem}>
           <p className='product-id'> {props.id} </p>
           <p className='product-name'>{props.name}</p>
           <p className='product-price'>$ {props.price}.00</p>
        </div>
    )
}

export default ProductCard;