import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RemoveCartProduct from './RemoveCartProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CurrentCartProduct = ({ product, currentCart, setCurrentCart }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cartProduct, setCartProduct] = useState([]);
    const [quantity, setQuantity] = useState(product.quantity);

    const updateQuantity = (change) => {
        setQuantity(quantity + change);
    }

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
        return <p>Loading...</p>;
    } else {
        return (
            <li key={product.productId} className='single-cart-product'>
                <img src={cartProduct.image} alt={cartProduct.title}></img>
                <div className='direction-responsive'>
                    <div className='column-desktop'>
                        <p>{cartProduct.title}</p>
                        <p>Price: €{cartProduct.price}</p>
                    </div>
                    <div className='amount-to-cart'>
                        <button disabled={quantity === 1 ? true : false} onClick={() => updateQuantity(-1)}><FontAwesomeIcon icon={faMinus} /></button>
                        <p className='amount'>{quantity}</p>
                        <button onClick={() => updateQuantity(1)}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <RemoveCartProduct product={product} currentCart={currentCart} setCurrentCart={setCurrentCart} />
                </div>
            </li>
        )
    }
}

export default CurrentCartProduct;