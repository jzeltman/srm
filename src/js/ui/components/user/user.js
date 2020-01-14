import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import firebase from 'firebase';

import { signOut, signIn } from '../../../db/actions/user';

import './user.scss';


const User = (props) => {
    const [user,setUser] = useState(props.user);
    const [token,setToken] = useState(null);
    const [menu,setMenu] = useState(false);

    let menuMarkup;

    const toggleMenu = e => setMenu(!menu);

    useEffect(() => {
        console.log('useEffect:', props)
        if (props) setUser(props.user);
    });

    if (menu) menuMarkup = (
        <ul id="User-Menu">
            <li>
                <span>Edit Profile </span>
                <i className="far fa-address-card"></i>
            </li>
            <li onClick={props.signOut}>
                <span>Sign Out </span>
                <i className="fas fa-sign-out-alt"></i>
            </li>
        </ul>
    ) 
    else menuMarkup = <></>;
    
    if (!user.uid) return (
        <div id="User-Sign-In" onClick={props.signIn}>
            <span>Sign Up </span>
            <i className="fas fa-sign-in-alt"></i>
        </div>
    )
    else return (
        <div id="User">
            <div id="User-Menu-Button" className={menu ? 'open' : ''} onClick={toggleMenu}>
                <img src={user.photoURL} id="User-Photo" />
                <div id="User-Name">
                    <strong>{user.displayName}</strong>
                    <i className="far fa-caret-square-down"></i>
                </div>
            </div>
            {menuMarkup}
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