import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader';

const CartProduct = ({ product }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cartProduct, setCartProduct] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + product.productId).then(
            (result) => {
                setIsLoaded(true);
                setCartProduct(result.data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    if (error) {
        return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
        return <Loader type={'none'} />;
    } else {
        return (
            <li key={product.productId} className='row'>
                <img src={cartProduct.image} alt={cartProduct.title}></img>
                <div className='column'>
                    <p>{cartProduct.title}</p>
                    <p><i>Quantity: {product.quantity}</i></p>
                </div>
            </li>
        )
    }
}

export default CartProduct;
