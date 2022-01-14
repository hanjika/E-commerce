import React from 'react';
import './Header.scss';
import Hamburger from './Hamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleHamburger }) => {
    return (
        <header className='app-header'>
            <Hamburger toggleHamburger={toggleHamburger}/>
            <h1>SHOP</h1>
            <div className='header-options'>
                <FontAwesomeIcon icon={faShoppingCart} className='direct-to-cart' onClick={() => { console.log('take me to cart') }}/>
            </div>
        </header>
    )
}

export default Header;
