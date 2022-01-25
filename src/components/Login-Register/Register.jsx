import React, { useState } from 'react';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    // const [data, setData] = useState(null);

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log('Submit registration form')
        // const newUser = {
        //     userId: uuid(),
        //     firstName: firstName,
        //     lastName: lastName,
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
            <label htmlFor='first-name'><b>First Name</b></label>
            <input type='text' value={firstName} name='first-name' onChange={(e) => setFirstName(e.target.value)}></input>

            <label htmlFor='last-name'><b>Last Name</b></label>
            <input type='text' value={lastName} name='last-name' onChange={(e) => setLastName(e.target.value)}></input>

            <label htmlFor='email'><b>Email</b></label>
            <input type='email' value={email} name='email' onChange={(e) => setEmail(e.target.value)}></input>

            <label htmlFor='password'><b>Choose Password</b></label>
            <input type='password' value={password} name='password' onChange={(e) => setPassword(e.target.value)}></input>

            <label htmlFor='passwordRepeat'><b>Confirm Password</b></label>
            <input type='password' value={passwordRepeat} name='passwordRepeat' onChange={(e) => setPasswordRepeat(e.target.value)}></input>

            <button type='submit'>Register</button>
        </form>
    )
}

export default Register;
