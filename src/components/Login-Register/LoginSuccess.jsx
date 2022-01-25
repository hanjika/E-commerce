import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const LoginSuccess = () => {
  return (
      <section className='login-success'>
        <p>Welcome to Shopya!</p>
        <Link to={'/'}>
          <button>Start shopping</button>
        </Link>
        <Link to={'/cart'}>
          <button>View cart</button>
        </Link>
        <Link to={'/profile'}>
          <button>View profile</button>
        </Link>
        <LogoutButton />
      </section>
  )
};

export default LoginSuccess;
