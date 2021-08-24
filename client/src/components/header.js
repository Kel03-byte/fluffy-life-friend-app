// Header Component

import React from 'react';
import logo from '../assets/images/icon.png'

const Header = () => {
    return (
        <header>
            <img id='logo' src={logo} alt=' cat logo'></img>
            <div>Fluffy Friends!</div>
        </header>
    );
};

export default Header;