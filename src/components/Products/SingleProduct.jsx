import React from 'react';
import './SingleProduct.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AddToCartButton from '../Cart/AddToCartButton';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product, addToCart }) => {
    return (
        <li key={product.id}>
            <Link to={`/product/${product.id}`}>
                <div className='product'>
                    <img src={product.image} alt={product.title}></img>
                    <p>{product.title}</p>
                    <p>€{product.price.toFixed(2)}</p>
                    <AddToCartButton product={product} addToCart={addToCart} />
                    {/* <button>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button> */}
                </div>
            </Link>
        </li>
    )
}

export default SingleProduct;