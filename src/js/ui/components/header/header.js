import React from 'react';

import Menu from '../menu/menu';
import Logo from '../logo/logo';
import User from '../user/user';

import './header.css';

const Header = (user) => {
    return (
        <header>
            <Menu user={user} />
            <Logo />
            <User user={user} />
        </header>
    );
}

export default Header;