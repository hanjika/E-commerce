import React from 'react';
import './Cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CurrentCart from './CurrentCart';
import CheckoutCart from './CheckoutCart';

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
                <button>Continue Shopping</button>
                <CheckoutCart userId={userId} currentCart={currentCart} />
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
