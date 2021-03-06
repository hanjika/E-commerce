import React from 'react';
// import axios from 'axios';
// import moment from 'moment';

const AddToCartButton = ({ userId, product, quantity, currentCart, setCurrentCart, alertOpen, setAlertOpen, setAddOrRemove }) => {
    const object = {
        productId: product.id,
        price: product.price,
        quantity: quantity
    };

    const addProductToCart = () => {
        setAddOrRemove('add');
        setCurrentCart(currentCart => [...currentCart, object]);
        setAlertOpen(true);
    }
    // const input = JSON.stringify(
    //     {
    //         userId: 1,
    //         date: '2020-02-03',
    //         products: [{productId:5,quantity:1},{productId:1,quantity:5}]
    //     }
    // );

    // useEffect(() => {
    //     axios.post('https://fakestoreapi.com/carts/' + userId, input).then(
    //         (result) => {
    //             console.log(result.result);
    //         },
    //         (error) => {
    //             setError(error);
    //         }
    //     )
    // }, []);

    return <button className='add-to-cart-button' onClick={addProductToCart}>Add To Cart</button>;
}

export default AddToCartButton;
