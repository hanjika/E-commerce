import './ProductDetails.scss';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import AddToCartContainer from './AddToCartContainer';
import AlertAddedToCart from './AlertAddedToCart';
import styled from 'styled-components';

const ProductDetails = ({ userId, currentCart, setCurrentCart }) => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);
    const [alertOpen, setAlertOpen] = useState(false);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + id).then(
            (result) => {
                setIsLoaded(true);
                setProduct(result.data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    // const CartModalStyle = styled.div`
    //     .product-selected {
    //         .added-to-cart-modal {
    //             display: ${alertOpen ? 'block' : 'none'};
    //         }
    //     }`;

    if (error) {
        return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
        return <p>Loading...</p>;
    } else {
        return (
            // <CartModalStyle>
                <div className='product-selected'>
                    <img src={product.image} alt={product.title}></img>
                    <div>
                        <p>{product.title}</p>
                        <p>€{product.price?.toFixed(2)}</p>
                        {/* <p>€{product.price.toFixed(2)}</p> */}
                        <AddToCartContainer userId={userId} product={product} currentCart={currentCart} setCurrentCart={setCurrentCart} alertOpen={alertOpen} setAlertOpen={setAlertOpen} />
                    </div> 
                    <AlertAddedToCart product={product} alertOpen={alertOpen} setAlertOpen={setAlertOpen} />
                </div>
            // {/* </CartModalStyle> */}
        )
    }
}

export default ProductDetails;
