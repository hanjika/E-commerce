import React from 'react';
import './Profile.scss';
import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import CartHistory from '../Cart/CartHistory';
import { Link } from 'react-router-dom';

const Profile = ({ userId }) => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    if (userId !== 0) {
        axios.get('https://fakestoreapi.com/users/' + userId).then(
            (result) => {
                setIsLoaded(true);
                setUser(result.data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    } else if (userId === 0) {
        return (
            <div className='to-login-register'>
                <p><b>You must log in to view your profile</b></p>
                <Link to={'/login'} className='nav-link'>
                    <button>Log in</button>
                </Link>
                <Link to={'/register'} className='nav-link'>
                    <button>Register</button>
                </Link>
            </div>
        )
    } else if (!isLoaded) {
        return <p>Loading...</p>;
    } else {
        return (
            <>
                <div className='profile'>
                    <h2>My Profile</h2>
                    <FontAwesomeIcon icon={faUser} className='user-img' size='10x' />
                    {/* <p className='capitalize'><b>{user.name.firstname} {user.name.lastname}</b></p> */}
                    <div>
                        <h3>My Details</h3>
                        <p><b>Username:</b> {user.username}</p>
                        <p><b>Email:</b> {user.email}</p>
                        <p><b>Telephone:</b> {user.phone}</p>
                        <details>
                            <summary>Address</summary>
                            {/* <p className='capitalize'>{user.address.number} {user.address.street}</p>
                            <p className='capitalize'>{user.address.city}</p>
                            <p>{user.address.zipcode}</p> */}
                        </details>
                        <details>
                            <summary>Previous Orders</summary>
                            <CartHistory userId={userId} />
                        </details>
                    </div>
                </div>
                {/* <style jsx>{`
                @import '../../abstracts/breakpoints';

                .filter-search > * {
                    @media (min-width: $tablet) {
                        display: none;
                    }
                }

                .search-bar {
                    display: none;
                }
                `}</style> */}
            </>
        )
    }
}

export default Profile;