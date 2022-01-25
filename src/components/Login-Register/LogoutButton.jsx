import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ setUserId }) => {
    let navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        setUserId(0);
        navigate('/');
    }

    return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
