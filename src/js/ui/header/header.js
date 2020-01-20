import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import Logo from '../logo/logo';
import HeaderToday from './today/header-today';
import HeaderContacts from './contacts/header-contacts';
import HeaderContact from './contact/header-contact';

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
            <Switch>
                <Route path="/contacts/:uid">
                    <HeaderContacts />
                    <HeaderContact />
                </Route>
                <Route path="/contacts" component={HeaderContacts} />
                <Route path="/" component={HeaderToday} />
                <Route>
                    {renderMenu()}
                    <Logo />
                    {renderUser()}
                </Route>
            </Switch>
        </header>
    );
}

const propMap = state => {
    return {
        ui: state.ui
    };
}
export default withRouter(connect(propMap,null)(Header));