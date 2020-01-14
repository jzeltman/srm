import React from 'react';

import Menu from '../menu/menu';
import Logo from '../logo/logo';
import User from '../user/user';
import Loading from '../loading/loading';

import './header.scss';

const Header = ({user}) => {
    return (
        <header id="Header">
            <div id="Header-Menu-Loading">
                <Menu user={user} />
                <Loading />
            </div>
            <Logo />
            <User user={user} />
        </header>
    );
}

export default Header;