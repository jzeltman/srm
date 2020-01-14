import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import firebase from 'firebase';

import { signOut } from '../../../db/actions/user';

import './user.scss';


const User = (props) => {
    const [user,setUser] = useState(props.user);
    const [token,setToken] = useState(null);
    const [menu,setMenu] = useState(false);

    let menuMarkup;
    
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email,groups_access_member_info,user_age_range,user_birthday,user_friends,user_gender,user_hometown,user_likes,user_link,user_location,user_photos');
    
    const signUpHandler = e => {
        firebase.auth().signInWithPopup(provider).then((result) => {
            setToken(result.credential.accessToken)
            setUser(result.user)
        }).catch((error) => console.error('error',error));
    };

    const signOutHandler = e => {
        console.log('signOutHandler:', e)
        firebase.auth().signOut();
        props.signOut();
    }

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
            <li onClick={signOutHandler}>
                <span>Sign Out </span>
                <i className="fas fa-sign-out-alt"></i>
            </li>
        </ul>
    ) 
    else menuMarkup = <></>;
    
    if (!user.uid) return (
        <div id="User-Sign-In" onClick={signUpHandler}>
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
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User);