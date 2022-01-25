import React, { useState } from 'react';
import axios from 'axios';
import Moment from 'moment';

const CheckoutCart = ({ userId, currentCart }) => {
    const [error, setError] = useState(null);

    const input = JSON.stringify(
        {
            userId: userId,
            date: Moment(new Date()).format('YYYY-MM-DD'),
            products: currentCart
        }
    );

    const checkingOut = () => {
        console.log('begin checkout');
        axios.post('https://fakestoreapi.com/carts', input).then(
            (result) => {
                console.log(result);
            },
            (error) => {
                setError(error);
            }
        )
    };

    if (error) {
        return <p>Error: {error.message}</p>;
    } else {
        return (
            <button onClick={checkingOut}>Checkout</button>
        )
    }
}

export default CheckoutCart;
