import React from 'react';
import '../Header/Header.scss';
import { Link } from 'react-router-dom';

const ErrorHeader = ({ setCategory }) => {
    return (
        <header className='app-header-error'>
            <div className='error-mobile-only'></div>
            <Link to={'/'} className='header-link'>
                <h1 onClick={() => setCategory('')}>Shopya</h1>
            </Link>
        </header>
    )
}

export default ErrorHeader;
