import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'moment';

const CheckoutCart = ({ userId, currentCart}) => {
    const [error, setError] = useState(null);
    console.log(currentCart);

    const input = JSON.stringify(
        {
            userId: userId,
            date: Moment(new Date()).format('YYYY-MM-DD'),
            products: currentCart
        }
    );

    const checkingOut = () => {
        axios.post('https://fakestoreapi.com/carts/', input).then(
            (result) => {
                console.log(result);
            },
            (error) => {
                setError(error);
            }
        )
    };

    return (
        <button onClick={checkingOut}>Checkout</button>
    )
}

export default CheckoutCart;
