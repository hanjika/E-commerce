import React from 'react';
import './SingleProduct.scss';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    return (
        <li className='product-list-item'>
            <Link to={`/product/${product.id}`} className='product-link'>
                <div className='product'>
                    <div>
                       <img src={product.image} alt={product.title}></img> 
                    </div>
                    <div className='product-info'>
                       <p>{product.title}</p>
                        <p>€{product.price.toFixed(2)}</p> 
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default SingleProduct;