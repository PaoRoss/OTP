import '../../../stylesheets/ProductCard.css'
import React from 'react';

function ProductCard({item, addItem}) {
    function showInfo(){
        addItem(item)
    }
    return(
        <div className='product-card' onClick={showInfo} >
           <p className='product-id'> {item.id} </p>
           <p className='product-name'>{item.name}</p>
           <p className='product-price'>$ {item.price}.00</p>
        </div>
    )
}

export default ProductCard;