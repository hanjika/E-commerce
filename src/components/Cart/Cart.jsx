import React from 'react';
import './Cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CurrentCart from './CurrentCart';
import CheckoutCart from './CheckoutCart';
import { Link } from 'react-router-dom';

const Cart = ({ total, setTotal, setAddOrRemove, userId, currentCart, setCurrentCart }) => {
    if (userId === 0) {
        return (
            <div className='to-login-register'>
                <p><b>You must log in to access your cart</b></p>
                <Link to={'/login'} className='nav-link'>
                    <button>Log in</button>
                </Link>
                <Link to={'/register'} className='nav-link'>
                    <button>Register</button>
                </Link>
            </div>
        )
    } else {
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
                        <CurrentCart total={total} setTotal={setTotal} setAddOrRemove={setAddOrRemove} currentCart={currentCart} setCurrentCart={setCurrentCart} />
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
}

export default Cart;
