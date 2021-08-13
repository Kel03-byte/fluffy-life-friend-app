// Sign In Page Component

import React, { Fragment, useState } from 'react';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import AddCat from './add-cat-page';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import EditCat from './edit-cat-page'

const routes = [
    {
        path: "/add",
        component: AddCat,
    },
    {
        path: "/edit",
        component: EditCat,
    }
];

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('')


    const [addUser, { error }] = useMutation(ADD_USER)

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await addUser({
                variables: {
                    username: username,
                    email: email,
                    password: password,
                },
            })
            console.log('Yay it worked!')
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleInputChange = (event) => {
        let target = event.target;
        let inputType = target.name;
        let inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'username') {
            setUserName(inputValue);
        } else if (inputType === 'password') {
            setPassword(inputValue)
        }
    };

    return (
        <Fragment>
            <div>Sign Up Page!</div>
            <div>
                <form>
                    <input
                        value={username}
                        name="username"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="username"
                    />
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email"
                    />
                    <input
                        value={password}
                        name="password"
                        onChange={handleInputChange}
                        type="password"
                        placeholder="password"
                    />
                    <button onClick={handleFormSubmit}>Submit</button>
                    <button>
                        <Link to='/add'>Add A Cat!</Link>
                    </button>
                    <button>
                        <Link to='/edit'>Edit A Cat!</Link>
                    </button>
                </form>
                {error && (
                    <div>
                        <p>Please Enter Your Details</p>
                    </div>
                )}
            </div>

            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>

        </Fragment>

    );
}