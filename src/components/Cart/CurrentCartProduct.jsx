import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RemoveCartProduct from './RemoveCartProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Loader from '../Loader';

const CurrentCartProduct = ({ product, currentCart, setCurrentCart, total, setTotal, setAddOrRemove }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cartProduct, setCartProduct] = useState([]);
    const [quantity, setQuantity] = useState(product.quantity);

    const updateQuantity = (change) => {
        setQuantity(quantity + change);
    }

    // const updateCart = (id, quant) => {
    //     const index = currentCart.findIndex(prod => prod.productId === id);
        
    //     if (index === -1)
    //         return;
        
    //     setCurrentCart(
    //         [
    //             ...currentCart.slice(0, index),
    //             Object.assign({}, currentCart[index], quant),
    //             ...currentCart.slice(index + 1)
    //         ]
    //     );
    //     console.log(currentCart);
    // }

    // useEffect(() => {
    //     updateCart(product.productId, quantity);
        // currentCart.map(cartProduct => cartProduct.productId === product.productId ? {
        //     ...cartProduct,
        //     quantity: quantity,
        // } : cartProduct);
        // console.log(currentCart);
    // }, [currentCart]);

    // fetch('https://fakestoreapi.com/carts/7',{
    //         method:"PUT",
    //         body:JSON.stringify(
    //             {
    //                 userId:3,
    //                 date:2019-12-10,
    //                 products:[{productId:1,quantity:3}]
    //             }
    //         )
    //     })
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))

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
            <li className='single-cart-product'>
                <img src={cartProduct.image} alt={cartProduct.title}></img>
                <div className='direction-responsive'>
                    <div className='column-desktop'>
                        <p>{cartProduct.title}</p>
                        <p>Price: €{cartProduct.price?.toFixed(2)}</p>
                    </div>
                    <div className='amount-to-cart'>
                        <button disabled={quantity === 1 ? true : false} onClick={() => updateQuantity(-1)}><FontAwesomeIcon icon={faMinus} /></button>
                        <p className='amount'>{quantity}</p>
                        <button onClick={() => updateQuantity(1)}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <RemoveCartProduct product={product} currentCart={currentCart} setCurrentCart={setCurrentCart} total={total} setTotal={setTotal} setAddOrRemove={setAddOrRemove} />
                </div>
            </li>
        )
    }
}

export default CurrentCartProduct;