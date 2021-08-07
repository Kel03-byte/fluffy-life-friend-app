// Cat Veiwing Page Component

import React, { Fragment } from 'react';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import Kitten from './kitten-page';
import Adult from './adult-cat-page';
import Senior from './senior-cat-page';

const routes = [
    {
        path: "/kittens",
        component: Kitten,
    },
    {
        path: "/adults",
        component: Adult,
    },
    {
        path: "/seniors",
        component: Senior,
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

export default function Cats() {

    return (
        <Fragment>
            <div>Cat Page!</div>
            <button>
                <Link to='/kittens'>Krazy Kittens!</Link>
            </button>
            <button>
                <Link to='/adults'>Awesome Adult Cats!</Link>
            </button>
            <button>
                <Link to='/seniors'>Sweet Senior Cats!</Link>
            </button>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
         </Fragment>
    );
}