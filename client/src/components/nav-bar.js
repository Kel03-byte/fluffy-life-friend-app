// Navagation Bar Component

import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/' id='nav-text'>Home</Link>
                </li>
                <li>
                    <Link to='/cats' id='nav-text'>Cats</Link>
                </li>
                <li >
                    <Link to='/login' id='nav-text'>Sign In</Link>
                </li>
                <li>
                    <Link to='/signup' id='nav-text'>Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;