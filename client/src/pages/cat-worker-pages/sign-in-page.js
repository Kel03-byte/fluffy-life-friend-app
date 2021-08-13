import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils//mutations';
import auth from '../../utils/auth';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import AddCat from '../cat-worker-pages/add-cat-page'
import EditCat from './edit-cat-page';

const routes = [
    {
        path: "/add",
        component: AddCat,
    },
    {
        path: "/edit",
        component: EditCat,
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

const SignIn = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
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
                        <p>
                            Welcome! You can:<br/>
                            
                                <Link to='/add'>Add A Cat!</Link><br/>
                            
                            or<br/>
                            
                                <Link to='/edit'>Edit A Cat!</Link>
                            
                        </p>
                    ) : (
                        <form>
                            <input
                                placeholder="Your email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <input
                                placeholder="Your password"
                                name="password"
                                type="password"
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <button onClick={handleFormSubmit}>Submit</button>
                        </form>
                    )}
                    {error && (
                        <div>
                            {error.message}
                        </div>
                    )}
                </div>
            </div>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </main>
    );
};

export default SignIn;