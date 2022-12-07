import '../../../stylesheets/ProductCard.css'
import React from 'react';

function ProductCard(props) {
    function showInfo(){
        //console.log(props.)
        const updatedOrder = [props.info, ...props.state]
        props.addItem(updatedOrder)
        //console.log(props.info);
    }
    return(
        <div className='product-card' onClick={showInfo} >
           <p className='product-id'> {props.id} </p>
           <p className='product-name'>{props.name}</p>
           <p className='product-price'>$ {props.price}.00</p>
        </div>
    )
}

export default ProductCard;