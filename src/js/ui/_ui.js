import React, { useState, useEffect } from 'react';

import firebase from 'firebase';

import Header from './components/header/header';
import Splash from './components/splash/splash';
import Dashboard from './components/dashboard/dashboard';
import Footer from './components/footer/footer';

import './ui.css';

import { db, contacts } from '../db/db';

let userDataFetched = false;

const UI = () => {
    const [user, setUser] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) setUser(firebaseUser);
            else setUser(null);
            if (!userDataFetched) getUserData(firebaseUser.uid);
        });
    });

    const getUserData = (uid) => {
        userDataFetched = true;
        contacts.read(uid,(contactsData) => setData(contactsData));
    }
        
    return (
        <>
            <Header user={user} />
            <main>
                {!user ? <Splash /> : <Dashboard user={user} data={data} db={db} />}
            </main>
            <Footer />
        </>
    )
}

export default UI;