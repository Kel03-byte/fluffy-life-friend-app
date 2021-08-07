// Sign In Page Component

import React, { Fragment } from 'react';
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

    return (
        <Fragment>
            <div>Sign In Page!</div>
            <p>Email</p>
            <p>Password</p>
            <button>
                <Link to='/addcat'>Add A Cat!</Link>
            </button>

            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </Fragment>
    );
}