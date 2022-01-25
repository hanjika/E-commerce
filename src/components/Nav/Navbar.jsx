import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className='navigation'>
            <ul>
                <Link to='/' className='nav-link'>
                    <li className='filter' onClick={() => { props.handleCategory(''); props.toggleHamburger() }}>All</li>
                </Link>
                <Link to='/' className='nav-link'>
                    <li className='filter' onClick={() => { props.handleCategory(`women's clothing`); props.toggleHamburger() }}>Women</li>
                </Link>
                <Link to='/' className='nav-link'>
                    <li className='filter' onClick={() => { props.handleCategory(`men's clothing`); props.toggleHamburger() }}>Men</li>
                </Link>
                <Link to='/' className='nav-link'>
                    <li className='filter' onClick={() => { props.handleCategory('jewelery'); props.toggleHamburger() }}>Jewellery</li>
                </Link>
                <Link to='/' className='nav-link'>
                    <li className='filter' onClick={() => { props.handleCategory('electronics'); props.toggleHamburger() }}>Electronics</li>
                </Link>
                <hr></hr>
                {props.userId === 0 ? 
                    (
                        <>
                            <li className='extra-mobile-link' onClick={() => props.toggleHamburger()}>
                                <Link to='/login' className='nav-link'>Log In</Link>
                            </li>
                            <li className='extra-mobile-link' onClick={() => props.toggleHamburger()}>
                                <Link to='/register' className='nav-link'>Register</Link>
                            </li>
                        </>
                    ) : 
                    (
                        <>
                            <li className='extra-mobile-link' onClick={() => props.toggleHamburger()}>
                                <Link to='/cart' className='nav-link'>My Cart</Link>
                            </li>
                            <li className='extra-mobile-link' onClick={() => props.toggleHamburger()}>
                                <Link to='/profile' className='nav-link'>My Profile</Link>
                            </li>
                            <li className='extra-mobile-link' onClick={() => {
                                    props.toggleHamburger();
                                    props.setUserId(0);
                                }}>
                                <Link to='/' className='nav-link'>Logout</Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar;
