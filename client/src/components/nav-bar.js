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
                        <button className='nav-button'><Link to='/' className='nav-text'>Home</Link></button>
                    </li>
                    <li>
                        <button className='nav-button'><Link to='/' className='nav-text'>Home</Link></button>
                    </li>
                    <li>
                        <button className='nav-button'><Link to='/' className='nav-text'>Home</Link></button>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul>
                    <li>
                        <button className='nav-button'><Link to='/' className='nav-text'>Home</Link></button>
                    </li>
                    <li>
                        <button className='nav-button'><Link to='/cats' className='nav-text'>Cats</Link></button>
                    </li>
                    <li>
                        <button className='nav-button'><Link to='/resources' className='nav-text'>Resources</Link></button>
                    </li>
                    <li >
                        <button className='nav-button'><Link to='/login' className='nav-text'>Sign In</Link></button>
                    </li>
                    <li>
                        <button className='nav-button'><Link to='/signup' className='nav-text'>Sign Up</Link></button>
                    </li>
                </ul>
            );
        };
    };
    return (
        <nav>
            {navBar()}
        </nav>
    );
};

export default Nav;