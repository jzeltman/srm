import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../../db/actions/user';

import './splash.scss';

const Splash = (props) => {

    return (
        <div id="Splash">
            <p>Splash - Here's the reason you should sign up for SRM</p>
            <button onClick={props.signIn}>
                <span>Sign Up with Facebook </span>
                <i className="fab fa-facebook-f"></i>
            </button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: () => signIn()
    }
}

export default connect(null,mapDispatchToProps)(Splash);