import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { signOut, signIn } from 'Actions/user';

const UserSignIn = props => {
    return (
        <>
            <aside>
                <img src={props.user.photoURL} id="User-Photo" />
                <button className="signout" onClick={props.signOut}>
                    <span>Sign Out</span>
                    <i className="fas fa-sign-in-alt"></i> 
                </button>
            </aside>
            <section>
                <p>profile fields here</p>
            </section>
        </>
    )
}

const propMap = state => {
    return {
        user: state.user
    }
}

const dispatcher = dispatch => {
    return {
        signOut: () => dispatch(signOut()),
        signIn: () => signIn()
    }
}

export default withRouter(connect(propMap,dispatcher)(UserSignIn));


