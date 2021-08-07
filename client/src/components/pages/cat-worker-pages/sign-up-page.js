// Sign In Page Component

import React, { Fragment, useState } from 'react';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import AddCat from './add-cat-page';
import { checkPassword, validateEmail } from '../../../utils/helpers';

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

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        let target = event.target;
        let inputType = target.name;
        let inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else if (inputType === 'password') {
            setPassword(inputValue)
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!validateEmail(email) || !userName) {
            setErrorMessage('Fill out email and username please!');
        } else if (!checkPassword(password)) {
            setErrorMessage(
                `Choose a more secure password for the account: ${userName}`
            );
        } else {
            setErrorMessage(`Hello ${userName}`);
        }
        setUserName('');
        setEmail('');
        setPassword('');
    };
    return (
        <Fragment>
            <div>Sign Up Page!</div>
            <div>
                <form>
                    <input
                        value={userName}
                        name="userName"
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