import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

const AlertAddedToCart = ({ product, setAlertOpen }) => {
    return (
        <div className='added-to-cart-modal'>
            <div className='modal-content'>
                <FontAwesomeIcon icon={faTimes} className='close-button' onClick={() => setAlertOpen(false)} />
                <img src={product.image} alt={product.title}></img>
                <p><b>{product.title}</b></p>
                <p>Added to cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </div>
    )
}

export default AlertAddedToCart;
