import './ProductDetails.scss';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import AddToCartContainer from './AddToCartContainer';

const ProductDetails = ({ userId, currentCart, setCurrentCart }) => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);

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

    if (error) {
        return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
        return <p>Loading...</p>;
    } else {
        return (
            <div className='product-selected'>
                <img src={product.image} alt={product.title}></img>
                <div>
                    <p>{product.title}</p>
                    <p>€{product.price?.toFixed(2)}</p>
                    {/* <p>€{product.price.toFixed(2)}</p> */}
                    <AddToCartContainer userId={userId} product={product} currentCart={currentCart} setCurrentCart={setCurrentCart} />
                </div> 
            </div>
        )
    }
}

export default ProductDetails;
