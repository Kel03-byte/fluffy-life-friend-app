// Sign In Page

import React, { useState, Fragment } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../utils/mutations';
import { Link } from 'react-router-dom';
import auth from '../../../utils/auth';
import './sign-in.css';

const SignIn = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });

    const [login, { error, data }] = useMutation(LOGIN_USER);

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
            const { data } = await login({
                variables: { ...formState },
            });
            auth.login(data.login.token);
        } catch (error) {
            console.error(error.message);
        }
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main>
            <div>
                <div>
                    {data ? (
                        <Fragment>
                            <p id='login-text'>Welcome!</p>
                            <p id='login-link'><Link to='/add'>Add A Cat!</Link></p><br />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div id='login-page'>
                                <div id='login-title'>Sign In!</div><br />
                                <form id='login-form'>
                                    <div>
                                        <label>Enter Your Email</label><br />
                                        <input
                                            id='login-input'
                                            placeholder='email'
                                            name='email'
                                            type='email'
                                            value={formState.email}
                                            onChange={handleChange}
                                        /><br />
                                    </div><br />
                                    <div>
                                        <label>Enter Your Password</label><br />
                                        <input
                                            id='login-input'
                                            placeholder='password'
                                            name='password'
                                            type='password'
                                            value={formState.password}
                                            onChange={handleChange}
                                        /><br />
                                    </div><br />
                                    <button id='login-button' onClick={handleFormSubmit}>Submit</button>
                                </form>
                            </div><br />
                        </Fragment>
                    )}
                    {error && (
                        <div>
                            {error.message}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default SignIn;