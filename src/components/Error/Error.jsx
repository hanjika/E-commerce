import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ErrorHeader from './ErrorHeader';
import Footer from '../Footer/Footer';

const Error = ({ message, setCategory }) => {
    return (
        <div className='app-error'>
            <ErrorHeader setCategory={setCategory}/>
            <div className='error'>
                <h2>Oops!</h2>
                <p>There has been an error</p>
                <p>Error: {message}</p>
                <FontAwesomeIcon icon={faExclamationTriangle} className='error-img' size='6x' /> 
            </div>
            <Footer />
        </div>
    )
}

export default Error;
