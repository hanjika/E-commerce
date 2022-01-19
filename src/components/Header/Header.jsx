import React from 'react';
import './Header.scss';
import Hamburger from './Hamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = ({ toggleHamburger, setCategory }) => {
    return (
        <header className='app-header'>
            <Hamburger toggleHamburger={toggleHamburger}/>
            <Link to={'/'} className='header-link'>
                <h1 onClick={() => setCategory('')}>Shopya</h1>
            </Link>
            <div className='header-options'>
                <Link to={'/login'} className='nav-link'>
                    <button>Log in</button>
                </Link>
                <Link to={'/register'} className='nav-link'>
                    <button>Register</button>
                </Link>
                <Link to={'/profile'} className='nav-link'>
                    <FontAwesomeIcon icon={faUser} className='direct-to-profile' size='2x' />
                </Link>
                <Link to={'/cart'} className='nav-link'>
                    <FontAwesomeIcon icon={faShoppingCart} className='direct-to-cart' size='2x' />
                </Link>
            </div>
        </header>
    )
}

export default Header;
