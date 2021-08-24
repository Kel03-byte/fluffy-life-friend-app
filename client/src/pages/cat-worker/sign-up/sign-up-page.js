// Sign Up Page

import React, { useState, Fragment } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';
import './sign-up.css';

const SignUp = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            Auth.login(data.addUser.token);
        } catch (error) {
            console.error(error.message);
        }
        setFormState({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <Fragment>
            <div id='signup-page'>
                <div id='signup-title'>Register for the site</div><br />
                <form id='signup-form'>
                    <div>
                        <label>Enter a User Name</label><br />
                        <input
                            className='signup-input'
                            placeholder='name'
                            name='username'
                            type='text'
                            value={formState.username}
                            onChange={handleChange}
                        /><br />
                    </div><br />
                    <div>
                        <label>Enter Your Email</label><br />
                        <input
                            className='signup-input'
                            placeholder='email'
                            name='email'
                            type='email'
                            value={formState.email}
                            onChange={handleChange}
                        /><br />
                    </div><br />
                    <div>
                        <label>Choose a Password</label><br />
                        <input
                            className='signup-input'
                            placeholder='password'
                            name='password'
                            type='password'
                            value={formState.password}
                            onChange={handleChange}
                        /><br />
                    </div><br />
                    <button id='signup-button' onClick={handleFormSubmit}>Submit</button>
                </form>
            </div><br />
        </Fragment>
    );
};

export default SignUp;