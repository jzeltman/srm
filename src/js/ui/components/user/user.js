import React, { useState, useEffect } from 'react';
import './user.css';

const User = (passedUser) => {
    const [user,setUser] = useState(passedUser.user);
    console.log('user:', user)

    if (!user) return <div>Sign Up</div>
    else return <div>Sign In</div>
}

export default User;