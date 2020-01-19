import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';

import Logo from 'Components/logo/logo';

import './nav.scss';

const Nav = props => {

    const renderUserOrSettings = () => {
        if (props.ui.orientation === 'landscape') {
            return (
                <Link to="/user">
                    <i className="fas fa-user-circle"></i>
                </Link>
            )
        } else {
            return (
                <Link to="/user">
                    <i className="fas fa-cogs"></i>
                </Link>
            )
        }
    }

    const renderNotifications = count => {
        if (count !== 0) return <span className="notifications">{count}</span>
        else return <></>;
    }

    return (
        <nav id="Nav">
            {props.ui.deviceClass === 'mobile' ? <></> : <Logo /> }
            <ul>
                <li className={props.location.pathname === '/' ? 'selected' : ''}>
                    <Link to="/">
                        {renderNotifications(props.contacts.length)}
                        <i className="fas fa-calendar-day"></i>
                    </Link>
                </li>
                <li className={props.location.pathname === '/contacts' ? 'selected' : ''}>
                    <Link to="/contacts">
                        <i className="fas fa-address-book"></i>
                    </Link>
                </li>
                <li className={props.location.pathname === '/actions' ? 'selected' : ''}>
                    <Link to="/actions">
                        <i className="fas fa-bell"></i>
                    </Link>
                </li>
                <li className={props.location.pathname === '/birthdays' ? 'selected' : ''}>
                    <Link to="/birthdays">
                        <i className="fas fa-birthday-cake"></i>
                    </Link>
                </li>
                <li className={props.location.pathname === '/user' ? 'selected' : ''}>
                    {renderUserOrSettings()}
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