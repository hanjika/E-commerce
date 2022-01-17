import React, { useState, useEffect } from 'react';
import './Products.scss';
import SingleProduct from './SingleProduct';

const Products = ({ searchedProducts, addToCart }) => {
    return (
        <section>
            <ul>
                {searchedProducts.map(product => (
                    <SingleProduct key={product.id} product={product} addToCart={addToCart} />
                ))}
            </ul>
        </section>
    )
}

export default Products;
