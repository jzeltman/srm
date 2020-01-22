import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import './header-user.scss';

const HeaderUser = props => {
    const title = props.user.FN || 'Sign Up';

    return (
        <header id="Header-User">
            <h1>
                <i className="fas fa-user-circle"></i>
                <span> {title}</span>
            </h1>
        </header>
    )
}

const propMap = state => {
    return {
        user: state.user
    }
}
export default withRouter(connect(propMap,null)(HeaderUser));
