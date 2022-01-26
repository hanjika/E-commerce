import React from 'react';

const TotalPrice = ({ total }) => {
    return <p className='cart-total-price'><b>Total:</b> €{total.toFixed(2)}</p>;
}

export default TotalPrice;
