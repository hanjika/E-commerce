import React, { useState, useEffect } from 'react';
import './Products.scss';
import SingleProduct from './SingleProduct';

const Products = ({ category, searchedProducts }) => {
    let categoryTitle = 'All Products';

    if (category !== '') {
        categoryTitle = category.split('/')[1];
        if (categoryTitle === 'jewelery') {
            categoryTitle = 'jewellery';
        }
    }

    return (
        <section>
            <h2 className='category'>{categoryTitle}</h2>
            <p className='number-of-products'>Displaying {searchedProducts.length} products</p>
            <ul>
                {searchedProducts.map(product => (
                    <SingleProduct key={product.id} product={product} />
                ))}
            </ul>
        </section>
    )
}

export default Products;
