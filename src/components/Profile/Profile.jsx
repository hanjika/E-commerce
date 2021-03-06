import React, { useState, useEffect } from 'react';
import './Profile.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import CartHistory from '../Cart/CartHistory';
import { Link } from 'react-router-dom';
import Error from '../Error/Error';
import Loader from '../Loader';

const Profile = ({ userId, setCategory }) => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
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
    }, []);

    // if (userId !== 0) {
    //     axios.get('https://fakestoreapi.com/users/' + userId).then(
    //         (result) => {
    //             setIsLoaded(true);
    //             setUser(result.data);
    //         },
    //         (error) => {
    //             setIsLoaded(true);
    //             setError(error);
    //         }
    //     );
    // }

    if (error) {
        return <Error message={error.message} setCategory={setCategory} />;
    } else if (userId === 0) {
        return (
            <div className='to-login-register'>
                <p><b>You must log in to view your progifile</b></p>
                <Link to={'/login'} className='nav-link'>
                    <button>Log in</button>
                </Link>
                <Link to={'/register'} className='nav-link'>
                    <button>Register</button>
                </Link>
            </div>
        )
    } else if (!isLoaded) {
        return <Loader type={'none'} />;
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
                <style jsx='true'>{`
                .filter-search > * {
                    @media (min-width: 800px) {
                        display: none;
                    }
                }

                .search-bar {
                    display: none;
                }
                `}</style>
            </>
        )
    }
}

export default Profile;
