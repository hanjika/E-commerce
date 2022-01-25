import React from 'react';
import './Products.scss';
import SingleProduct from './SingleProduct';

const Products = ({ error, category, searchedProducts }) => {
    let categoryTitle = 'All Products';

    if (category !== '') {
        categoryTitle = category.split('/')[1];
        if (categoryTitle === 'jewelery') {
            categoryTitle = 'jewellery';
        }
    }

    if (error !== null) {
        return null;
    } else {
        return (
            <section className='products-section'>
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
}

export default Products;
