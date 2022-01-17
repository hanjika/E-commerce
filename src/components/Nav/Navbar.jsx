import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
// import Home from '../Pages/Home/Home';
// import Profile from '../Pages/Profile/Profile';
// import Cart from '../Pages/Cart/Cart';
// import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const Navbar = (props) => {
    return (
        <>
            <nav className='navigation'>
                <ul>
                    <li className='filter' onClick={() => { props.handleCategory(''); props.toggleHamburger() }}>All</li>
                    <li className='filter' onClick={() => { props.handleCategory(`women's clothing`); props.toggleHamburger() }}>Women</li>
                    <li className='filter' onClick={() => { props.handleCategory(`men's clothing`); props.toggleHamburger() }}>Men</li>
                    <li className='filter' onClick={() => { props.handleCategory('jewelery'); props.toggleHamburger() }}>Jewellery</li>
                    <li className='filter' onClick={() => { props.handleCategory('electronics'); props.toggleHamburger() }}>Electronics</li>
                    <hr></hr>
                    <li className='extra-mobile-link'>
                        <Link to='/cart' className='nav-link'>My Cart</Link>
                    </li>
                    <li className='extra-mobile-link'>
                        <Link to='/profile' className='nav-link'>My Profile</Link>
                    </li>
                    <li className='extra-mobile-link'>Logout</li>
                </ul>
            </nav>
            <style jsx>{`
                .navigation ul {
                    display: ${props.hamburgerOpen ? 'inline' : 'none'};
                }
            `}</style>
        </>     
    )
}

export default Navbar;
