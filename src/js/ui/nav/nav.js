import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';

import Logo from 'Components/logo/logo';

import './nav.scss';

const Nav = props => {

    const renderNotifications = count => {
        if (count !== 0) return <span className="notifications">{count}</span>
        else return <></>;
    }

    return (
        <nav id="Nav">
            <Logo />
            <ul>
                <li className={props.location.pathname === '/' ? 'selected' : ''}>
                    <Link to="/">
                        {renderNotifications(props.contacts.length)}
                        <i className="fas fa-calendar-day"></i>
                    </Link>
                </li>
                <li className={props.location.pathname.includes('/contacts') ? 'selected' : ''}>
                    <Link to="/contacts">
                        <i className="fas fa-address-book"></i>
                    </Link>
                </li>
                <li className={props.location.pathname === '/user' ? 'selected' : ''}>
                    <Link to="/user">
                        <i className="fas fa-user-circle"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

const propMap = state => {
    return {
        ui: state.ui,
        contacts: state.contacts
    }
}

export default withRouter(connect(propMap)(Nav))