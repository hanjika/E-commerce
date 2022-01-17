import React from 'react';
import CurrentCartProduct from './CurrentCartProduct';

const CurrentCart = ({ currentCart, setCurrentCart }) => {

    return (
        <div className='current-cart'>
            <ul>
                {currentCart.map(product => (
                    <CurrentCartProduct product={product} setCurrentCart={setCurrentCart} />                  
                ))}
            </ul>
        </div>
    )
}

export default CurrentCart;
