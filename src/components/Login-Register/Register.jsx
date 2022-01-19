import React, { useState } from 'react';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    return (
        <form className='form-register'>
            <h2>Register</h2>
            <label for='first-name'><b>First Name</b></label>
            <input type='text' value={firstName} name='first-name' onChange={(e) => setFirstName(e.target.value)}></input>
            <label for='last-name'><b>Last Name</b></label>
            <input type='text' value={lastName} name='last-name' onChange={(e) => setLastName(e.target.value)}></input>
            <label for='email'><b>Email</b></label>
            <input type='email' value={email} name='email' onChange={(e) => setEmail(e.target.value)}></input>
            <label for='password'><b>Choose Password</b></label>
            <input type='password' value={password} name='password' onChange={(e) => setPassword(e.target.value)}></input>
            <label for='password'><b>Confirm Password</b></label>
            <input type='password' value={passwordRepeat} name='password' onChange={(e) => setPasswordRepeat(e.target.value)}></input>
            <button type='submit'>Register</button>
        </form>
    )
}

export default Register;
