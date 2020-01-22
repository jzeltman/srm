import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import './sign-in.scss';

import { signOut, signIn } from 'Actions/user';
import Logo from 'Components/logo/logo';

const UserSignIn = props => {
    return (
        <>
            <aside>
                <div>
                    <button className="button facebook" onClick={props.signIn}>
                        <span>Continue with Facebook</span>
                        <i className="fab fa-facebook"></i>
                    </button>
                    <button className="button google">
                        <span>Continue with Google</span>
                        <i className="fab fa-google"></i>
                    </button>
                    <hr />
                    <button className="button signup">
                        <span>Sign Up with Email</span>
                        <i className="fas fa-envelope"></i>
                    </button>
                    <hr/>
                    <strong>Already have an account?</strong>
                    <button className="button signin">
                        <span>Sign In</span>
                        <i className="fas fa-sign-in-alt"></i> 
                    </button>
                </div>
            </aside>
            <section>
                <h2>Here's why you should sign up for [AppName]</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum nibh enim, quis viverra turpis eleifend sit amet. In condimentum varius quam eu bibendum. Sed congue elit blandit, rutrum turpis at, porta nibh.</p>
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
