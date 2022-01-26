import React from 'react';
import CurrentCartProduct from './CurrentCartProduct';
import TotalPrice from './TotalPrice';

const CurrentCart = ({ total, setTotal, setAddOrRemove, currentCart, setCurrentCart }) => {
    return (
        <div className='current-cart'>
            <ul>
                {currentCart.map(product => (
                    <CurrentCartProduct key={product.productId} product={product} currentCart={currentCart} setCurrentCart={setCurrentCart} total={total} setTotal={setTotal} setAddOrRemove={setAddOrRemove} />                  
                ))}
            </ul>
            <TotalPrice total={total} />
        </div>
    )
}

export default CurrentCart;
