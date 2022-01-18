import React, { useState } from 'react';
// import axios from 'axios';
// import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const AddToCartButton = ({ userId, product, quantity, currentCart, setCurrentCart, setAlertOpen }) => {
    const object = {
        productId: product.id,
        quantity: quantity
    };
    // const input = JSON.stringify(
    //     {
    //         userId: 1,
    //         date: '2020-02-03',
    //         products: [{productId:5,quantity:1},{productId:1,quantity:5}]
    //     }
    // );

    // useEffect(() => {
    //     axios.post('https://fakestoreapi.com/carts/' + userId, input).then(
    //         (result) => {
    //             console.log(result.result);
    //         },
    //         (error) => {
    //             setError(error);
    //         }
    //     )
    // }, []);

    return (
        <button onClick={() => {
            setCurrentCart(currentCart => [...currentCart, object]);
            // alert('Added to cart');
            setAlertOpen(true);
        }}>
            Add To Cart
        </button>
    )
}

export default AddToCartButton;
