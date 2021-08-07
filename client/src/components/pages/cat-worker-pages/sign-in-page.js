// Sign In Page Component

import React, { Fragment, useState } from 'react';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import AddCat from './add-cat-page';

const routes = [
    {
        path: "/addcat",
        component: AddCat,
    },
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

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        let target = event.target;
        let inputType = target.name;
        let inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'password') {
            setPassword(inputValue)
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            setErrorMessage('Please enter your email and password to sign in!');
        } else {
            setErrorMessage(`Hello ${email}`);
        }
        setEmail('');
        setPassword('');
    };

    return (
        <Fragment>
            <div>Sign In Page!</div>
            <div>
                <form>
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
                        <Link to='/addcat'>Add A Cat!</Link>
                    </button>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
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