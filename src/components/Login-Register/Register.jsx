import React, { useState } from 'react';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    // const [data, setData] = useState(null);

    // if (typeof input['password'] !== 'undefined' && typeof input['passwordRepeat'] !== 'undefined') {
    //     if (input['password'] != input['passwordRepeat']) {
    //       isValid = false;
    //       errors['password'] = 'Passwords do not match.';
    //     }
    // }

    // useEffect(() => {
    //     if (typeof input['password'] !== 'undefined' && typeof input['passwordRepeat'] !== 'undefined') {
    //         if (input['password'] != input['passwordRepeat']) {
    //           errors['password'] = 'Passwords do not match.';
    //         }
    //     }
    // }, [password, passwordRepeat]);

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        alert('Registration in progress');
        console.log('Submit registration form')
        // const newUser = {
        //     userId: uuid(),
        //     firstName: firstName,
        //     lastName: lastName,
        //     username: username,
        //     email: email,
        //     password: password,
        //     phone: phone,
        //     admin: false,
        //     address :{
        //         number: addNumber,
        //         street: addStreet,
        //         city: addCity,
        //         zipcode: addZipcode
        //     }
        // }
        // setData(newUser);
    }

    // useEffect(() => {
    //     if (data) {
    //         axios.post('http://localhost:3000/api/register', data).then(
    //             (result) => {
    //                 console.log(result);
    //             },
    //             (error) => {

    //             }
    //         )
    //     }
    // }, [data]);

    return (
        <form className='form-register' onSubmit={handleRegisterSubmit}>
            <h2>Register</h2>
            <label htmlFor='first-name' className='required'><b>First Name</b></label>
            <input type='text' value={firstName} name='first-name' required onChange={(e) => setFirstName(e.target.value)}></input>

            <label htmlFor='last-name' className='required'><b>Last Name</b></label>
            <input type='text' value={lastName} name='last-name' required onChange={(e) => setLastName(e.target.value)}></input>

            <label htmlFor='username' className='required'><b>Username</b></label>
            <input type='username' value={username} name='username' required onChange={(e) => setUsername(e.target.value)}></input>

            <label htmlFor='email' className='required'><b>Email</b></label>
            <input type='email' value={email} name='email' required onChange={(e) => setEmail(e.target.value)}></input>

            <label htmlFor='password' className='required'><b>Password</b></label>
            <input type='password' value={password} name='password' required onChange={(e) => setPassword(e.target.value)}></input>

            <label htmlFor='passwordRepeat' className='required'><b>Confirm Password</b></label>
            <input type='password' value={passwordRepeat} name='passwordRepeat' required onChange={(e) => setPasswordRepeat(e.target.value)}></input>

            <button type='submit'>Register</button>
        </form>
    )
}

export default Register;
