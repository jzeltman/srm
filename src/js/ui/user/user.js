import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import './user.scss';

import UserSignIn from './sign-in/sign-in';
import Profile from './profile/profile';
import { signOut, signIn } from 'Actions/user';


const User = (props) => {
    console.log('props.user:', props.user)
    return (
        <div id="User" className={props.user.uid ? 'profile' : 'sign-in'}>
            {props.user.uid ? <Profile /> : <UserSignIn />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut()),
        signIn: () => signIn()
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User);