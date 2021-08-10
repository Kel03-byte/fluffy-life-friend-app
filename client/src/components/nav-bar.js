import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../pages/home-page'
import Cats from '../pages/cat-viewing-pages/cat-page'
import SignIn from '../pages/cat-worker-pages/sign-in-page'
import SignUp from '../pages/cat-worker-pages/sign-up-page';
import AddCat from '../pages/cat-worker-pages/add-cat-page';
import Single from '../pages/cat-viewing-pages/single-cat-page'

const routes = [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/login",
        component: SignIn,
    },
    {
        path: "/cats",
        component: Cats
    },
    {
        path: "/signup",
        component: SignUp,
    },
    {
        path: "/addcat",
        component: AddCat,
    },
    {
        path: "/:id",
        component: Single,
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

export default function Nav() {

    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/cats">Cats</Link>
                    </li>
                    <li>
                        <Link to="/login">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>

                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>
        </Router>
    );
}