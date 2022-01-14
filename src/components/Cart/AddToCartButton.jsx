import React from 'react';

const AddToCartButton = ({ product, addToCart }) => {
    return (
        <button onClick={() => {
            addToCart({
                image: product.image,
                title: product.title,
                price: product.price
            });
        }}>
            Add To Cart
        </button>
    )
}

export default AddToCartButton;
