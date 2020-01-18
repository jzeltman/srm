import React from 'react';
import { connect } from 'react-redux';

import Menu from '../menu/menu';
import Logo from '../logo/logo';
import User from '../user/user';
import Loading from '../loading/loading';

import './header.scss';

const Header = (props) => {
    const renderMenu = () => {
        if (
            props.ui.orientation === 'portrait'
        ) {
            return (
                <button>
                    <i className="fas fa-bars"></i>
                </button>
            )
        } else return <></>;
    }

    const renderUser = () => {
        if (
            props.ui.orientation === 'portrait'
        ) {
            return (
                <button>
                    <i className="far fa-user-circle"></i>
                </button>
            )
        } else return <></>;
    }

    return (
        <header id="Header">
            {renderMenu()}
            <Logo />
            {renderUser()}
        </header>
    );
}

const propMap = state => {
    return {
        ui: state.ui
    };
}
export default connect(propMap,null)(Header);