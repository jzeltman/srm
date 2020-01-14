import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import Header from './components/header/header';
import Splash from './components/splash/splash';
import Dashboard from './components/dashboard/dashboard';
import Footer from './components/footer/footer';

import './ui.scss';

const UI = ({passedUID}) => {
    const [uid, setUid] = useState(passedUID);
    
    useEffect(() => {
        console.log('useEffect:', passedUID, uid)
        if (uid !== passedUID) setUid(passedUID)
    });
        
    return (
        <>
            <Header />
            <main>
                {!uid ? <Splash /> : <Dashboard />}
            </main>
            <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
        passedUID: state.user.uid
    }
};

export default connect(mapStateToProps,null)(UI);