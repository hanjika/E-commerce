import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.scss';
import AllCarts from './AllCarts';

const CartHistory = ({ userId }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/carts/user/' + userId).then(
            (result) => {
                console.log(result.data);
                setIsLoaded(true);
                setCarts(result.data);
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
        return <p>Loading...</p>;
    } else {
        return (
            <>
                <div className='cart' id='history'>
                    {carts.length === 0 ? (
                        <p>No previous orders</p>
                        ) : (
                        <AllCarts carts={carts} />
                    )}
                </div>
                <style jsx>{`
                .filter-search > * {
                    display: none;
                }
            `}</style>
            </>
        )
    }
}

export default CartHistory;