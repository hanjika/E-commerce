import React from 'react';
import './AlertAddedToCart.scss';

const AlertAddedToCart = ({ productData }) => {
    console.log('here', productData)
    return (
        <div className='added-to-cart-modal'>
            <div className='modal-content'>
                <p>{productData.title} added to cart</p>
            </div>
        </div>
    )
}

export default AlertAddedToCart;
