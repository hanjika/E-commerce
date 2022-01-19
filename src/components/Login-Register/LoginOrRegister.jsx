import React from 'react';
import { Link } from 'react-router-dom';

const LoginOrRegister = () => {
    return (
        <div className='login-or-register'>
            <p><b>You must log in to access your cart</b></p>
            <Link to={'/login'} className='nav-link'>
                    <button>Log in</button>
            </Link>
            <Link to={'/register'} className='nav-link'>
                <button>Register</button>
            </Link>
        </div>
    )
}

export default LoginOrRegister;
