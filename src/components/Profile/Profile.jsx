import React from 'react';
import './Profile.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import CartHistory from '../Cart/CartHistory';

const Profile = ({ userId }) => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/users/' + userId).then(
            (result) => {
                setIsLoaded(true);
                setUser(result.data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    if (error) {
        return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
        return <p>Loading...</p>;
    } else {
        return (
            <>
                <div className='profile'>
                    <h2>My Profile</h2>
                    <FontAwesomeIcon icon={faUser} className='user-img' size='10x' />
                    {/* <p className='capitalize'>{user.name.firstname} {user.name.lastname}</p> */}
                    <div>
                        <h3>My Details</h3>
                        <p><b>Username:</b> {user.username}</p>
                        <p><b>Email:</b> {user.email}</p>
                        <p><b>Telephone:</b> {user.phone}</p>
                        <details>
                            <summary >Address</summary>
                            {/* <p className='capitalize'>{user.address.number} {user.address.street}</p>
                            <p className='capitalize'>{user.address.city}</p>
                            <p>{user.address.zipcode}</p> */}
                        </details>   
                    </div>
                    <details>
                        <summary>Previous Orders</summary>
                        <CartHistory userId={userId} />
                    </details>   
                </div>
                <style jsx>{`
                @import '../../abstracts/breakpoints';

                .filter-search > * {
                    @media (min-width: $tablet) {
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
