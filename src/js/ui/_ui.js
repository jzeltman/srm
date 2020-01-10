import React, { useState, useEffect } from 'react';

import firebase from 'firebase';
import config from '../../../firebase.config.js';

import Header from './components/header/header';
import Splash from './components/splash/splash';
import Dashboard from './components/dashboard/dashboard';
import Footer from './components/footer/footer';

import './ui.css';

firebase.initializeApp(config);

const UI = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) setUser(firebaseUser);
            else setUser(null)
        });
    });

    return (
        <>
            <Header user={user} />
            {!user ? <Splash /> : <Dashboard user={user} />}
            <Footer />
        </>
    )
}

export default UI;