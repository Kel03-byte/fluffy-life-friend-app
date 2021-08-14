// Navagation Bar Component

import React from 'react';
import Auth from '../utils/auth'
import { Link } from 'react-router-dom';

function Nav() {
    function navBar() {
        if (Auth.loggedIn()) {
            return (
                <ul>
                    <li>
                        <Link to='/add' id='nav-text'>Add</Link>
                    </li>
                    <li>
                        <Link to='/edit' id='nav-text'>Edit</Link>
                    </li>
                    <li>
                        <a href='/' onClick={() => Auth.logout()} id='nav-text'>Sign Out</a>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul>
                    <li>
                        <Link to='/' id='nav-text'>Home</Link>
                    </li>
                    <li>
                        <Link to='/cats' id='nav-text'>Cats</Link>
                    </li>
                    <li>
                        <Link to='/resources' id='nav-text'>Resources</Link>
                    </li>
                    <li >
                        <Link to='/login' id='nav-text'>Sign In</Link>
                    </li>
                    <li>
                        <Link to='/signup' id='nav-text'>Sign Up</Link>
                    </li>
                </ul>
            );
        };
    };
    return (
        <nav>
            {navBar()}
            {/* <ul>
                <li>
                    <Link to='/add' id='nav-text'>Add</Link>
                </li>
                <li>
                    <Link to='/edit' id='nav-text'>Edit</Link>
                </li>
                <li>
                    <Link to='/' id='nav-text'>Home</Link>
                </li>
                <li>
                    <Link to='/cats' id='nav-text'>Cats</Link>
                </li>
                <li>
                    <Link to='/resources' id='nav-text'>Resources</Link>
                </li>
                <li >
                    <Link to='/login' id='nav-text'>Sign In</Link>
                </li>
                <li>
                    <Link to='/signup' id='nav-text'>Sign Up</Link>
                </li>
            </ul> */}
        </nav>
    );
};

export default Nav;