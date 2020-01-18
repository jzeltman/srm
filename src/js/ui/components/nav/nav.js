import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import Logo from 'Components/logo/logo';

import './nav.scss';

const Nav = props => {

    const [selected,setSelected] = useState(props.ui.menu);

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
            return <i className="fas fa-user-circle"></i>;
        } else return <i className="fas fa-cogs"></i>;
    }

    const clickHandler = e => {

    }

    return (
        <nav id="Nav">
            {renderLogo()}
            <ul>
                <li 
                    onClick={() => setSelected('contacts')}
                    className={selected === 'contacts' ? 'selected' : ''}
                >
                    <i className="fas fa-address-book"></i>
                </li>
                <li 
                    onClick={() => setSelected('today')}
                    className={selected === 'today' ? 'selected' : ''}
                >
                    <i className="fas fa-calendar-day"></i>
                </li>
                <li 
                    onClick={() => setSelected('reminders')}
                    className={selected === 'reminders' ? 'selected' : ''}
                >
                    <i className="fas fa-bell"></i>
                </li>
                <li 
                    onClick={() => setSelected('birthdays')}
                    className={selected === 'birthdays' ? 'selected' : ''}
                >
                    <i className="fas fa-birthday-cake"></i>
                </li>
                <li 
                    onClick={() => setSelected('user')}
                    className={selected === 'user' ? 'selected' : ''}
                >
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

export default connect(propMap)(Nav)