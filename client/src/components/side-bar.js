import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Auth from '../utils/auth'
import './side-bar.css'

function Sidebar() {
    function navBar() {
        if (Auth.loggedIn()) {
            return (
                <Menu>
                    <Link to='/' className='menu-item'>Home</Link>
                    <Link to='/add' className='menu-item'>Add</Link>
                    <Link to='/edit' className='menu-item'>Edit</Link>
                    <a className='menu-item' href='/' onClick={() => Auth.logout()}>Sign Out</a>
                </Menu>
            )
        } else {
            return (
                <Menu>
                    <Link to='/' className='menu-item'>Home</Link>
                    <Link to='/cats' className='menu-item'>Cats</Link>
                    <Link to='/resources' className='menu-item'>Resources</Link>
                    <Link to='/login' className='menu-item'>Sign In</Link>
                    <Link to='/signup' className='menu-item'>Register</Link>
                </Menu>
            );
        };
    };
    return (
        <nav>
            {navBar()}
        </nav>
    );
};

export default Sidebar;