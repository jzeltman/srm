import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';

import Logo from 'Components/logo/logo';

import './nav.scss';

const Nav = props => {
console.log('nav props:', props)

    const [selected,setSelected] = useState(props.location.pathname);

    const renderLogo = () => {
        if (
            props.ui.orientation === 'landscape' &&
            props.ui.dimensions.height > 700
        ) {
            return <Logo />;
        } else return <></>
    }

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

    return (
        <nav id="Nav">
            {renderLogo()}
            <ul>
                <li className={props.location.pathname === '/contacts' ? 'selected' : ''}>
                    <Link to="/contacts">
                        <i className="fas fa-address-book"></i>
                    </Link>
                </li>
                <li className={props.location.pathname === '/' ? 'selected' : ''}>
                    <Link to="/">
                        <i className="fas fa-calendar-day"></i>
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
        ui: state.ui
    }
}

export default withRouter(connect(propMap)(Nav))