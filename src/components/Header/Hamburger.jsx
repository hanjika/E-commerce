import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Hamburger = ({ hamburgerOpen, toggleHamburger }) => {
    if (!hamburgerOpen) {
        return (
            <div className='hamburger' onClick={toggleHamburger}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        )
    } else {
        return (
            <div className='hamburger' onClick={toggleHamburger}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
        )
    }   
}

export default Hamburger;
