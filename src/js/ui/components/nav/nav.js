import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import Logo from 'Components/logo/logo';

import './nav.scss';

const Nav = props => {

    const renderLogo = () => {
        if (
            props.ui.orientation === 'landscape' &&
            props.ui.dimensions.height > 700
        ) {
            return <Logo />;
        } else return <></>
    }

    return (
        <nav id="Nav">
            {renderLogo()}
            <ul>
                <li>
                    <i className="fas fa-address-book"></i>
                </li>
                <li>
                    <i className="fas fa-calendar-day"></i>
                </li>
                <li>
                    <i className="fas fa-bell"></i>
                </li>
                <li>
                    <i className="fas fa-birthday-cake"></i>
                </li>
                <li>
                    <i className="fas fa-user-circle"></i>
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

export default connect(propMap)(Nav)