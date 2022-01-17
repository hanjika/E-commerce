import React from 'react';
import './Cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CurrentCart from './CurrentCart';
import CheckoutCart from './CheckoutCart';
import { Link } from 'react-router-dom';

const Cart = ({ userId, currentCart, setCurrentCart }) => {
    return (
        <>
            <div className='cart'>
                <h2>My Cart</h2>
                {currentCart.length === 0 ? (
                    <>
                        <FontAwesomeIcon icon={faShoppingCart} className='empty-cart' size='10x' />
                        <p>Cart is empty</p>
                    </> 
                    ) : (
                    <CurrentCart currentCart={currentCart} setCurrentCart={setCurrentCart} />
                )}
                <div className='final-option-buttons'>
                    <Link to='/'>
                        <button>Continue Shopping</button>  
                    </Link>
                    {currentCart.length === 0 ? null : (
                        <CheckoutCart userId={userId} currentCart={currentCart} />
                    )}
                </div>
            </div>
            <style jsx>{`
            .filter-search > * {
                @media (min-width: 800px) {
                    display: none;
                }
            }

            .search-bar {
                display: none;
            }
            `}</style>
        </>
    )
}

export default Cart;
