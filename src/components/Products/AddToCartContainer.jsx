import React, { useState } from 'react';
import AddToCartButton from './AddToCartButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const AddToCartContainer = ({ userId, product, currentCart, setCurrentCart, alertOpen, setAlertOpen }) => {
    const [quantity, setQuantity] = useState(1);

    const updateQuantity = (change) => {
        setQuantity(quantity + change);
    }

    return (
        <div>
            <div className='amount-to-cart'>
                <button disabled={quantity === 1 ? true : false} onClick={() => updateQuantity(-1)}><FontAwesomeIcon icon={faMinus} /></button>
                <p className='amount'>{quantity}</p>
                <button onClick={() => updateQuantity(1)}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <AddToCartButton userId={userId} product={product} quantity={quantity} currentCart={currentCart} setCurrentCart={setCurrentCart} alertOpen={alertOpen} setAlertOpen={setAlertOpen} />
        </div>
    )
}

export default AddToCartContainer;
