import React from 'react';

import Menu from '../menu/menu';
import Logo from '../logo/logo';
import User from '../user/user';

import './header.scss';

const Header = ({user}) => {
    return (
        <header id="Header">
            <Menu user={user} />
            <Logo />
            <User user={user} />
        </header>
    );
}

export default Header;