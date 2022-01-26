import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginSuccess from './LoginSuccess';
import { useNavigate } from 'react-router-dom';

const Login = ({ userId, setUserId }) => {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(null);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const userLogin = {
            username: username,
            password: password
        };
        await setData(userLogin);
        await navigate('/loginsuccess');
    }

    useEffect(() => {
        if (data) {
            axios.post('https://fakestoreapi.com/auth/login/', data).then(
                (result) => {
                    setUserId(result.data.id);
                    setIsLoggedIn(true);
                },
                (error) => {
                    setError(error);
                }
            );
        }
    }, [data]);

    if (error) {
        return <p>Error: {error.message}</p>;
    } else if (isLoggedIn) {
        return <LoginSuccess />;
    }

    return (
        <form className='form-login' onSubmit={handleLoginSubmit}>
            <h2>Log in</h2>
            <label htmlFor='username'><b>Username</b></label>
            <input type='text' value={username} name='username' onChange={(e) => setUsername(e.target.value)}></input>
            <label htmlFor='password'><b>Password</b></label>
            <input type='password' value={password} name='password' onChange={(e) => setPassword(e.target.value)}></input>
            <button type='submit'>Log in</button>
        </form>
    )
}

export default Login;
