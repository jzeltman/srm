import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

import './user.css';

const provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('email,groups_access_member_info,user_age_range,user_birthday,user_friends,user_gender,user_hometown,user_likes,user_link,user_location,user_photos');

const User = (passedUser) => {
    const [user,setUser] = useState(passedUser.user);
    const [token,setToken] = useState(null);
    
    const signUpHandler = e => {
        firebase.auth().signInWithPopup(provider).then((result) => {
            setToken(result.credential.accessToken)
            setUser(result.user)
        }).catch((error) => console.error('error',error));
    };

    useEffect(() => {
        if (passedUser) setUser(passedUser.user);
    });

    if (!user) return <div onClick={signUpHandler}>Sign Up</div>
    else return (
        <div id="User-Menu">
            <img src={user.photoURL} id="User-Photo" />
            <strong id="User-Name">{user.displayName}</strong>
        </div>
    )
}

export default User;