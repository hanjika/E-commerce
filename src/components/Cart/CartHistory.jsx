import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.scss';
import AllCarts from './AllCarts';
import Loader from '../Loader';

const CartHistory = ({ userId }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/carts/' + userId).then(
            (result) => {
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
        return <Loader type={'none'} />;
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
                <style jsx='true'>{`
                .filter-search > * {
                    display: none;
                }
            `}</style>
            </>
        )
    }
}

export default CartHistory;