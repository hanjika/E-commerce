import React from 'react';
import { useState } from 'react/cjs/react.development';
import CurrentCartProduct from './CurrentCartProduct';
import TotalPrice from './TotalPrice';

const CurrentCart = ({ currentCart, setCurrentCart }) => {
    // const total = 
    console.log(currentCart);
    const [total, setTotal] = useState(0);

    return (
        <div className='current-cart'>
            <ul>
                {currentCart.map(product => (
                    <CurrentCartProduct product={product} setCurrentCart={setCurrentCart} total={total} setTotal={setTotal} />                  
                ))}
            </ul>
            <TotalPrice total={total} setTotal={setTotal} />
        </div>
    )
}

export default CurrentCart;
