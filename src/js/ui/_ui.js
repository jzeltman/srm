import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import Header from 'Components/header/header';
import Splash from 'Components/splash/splash';
import Dashboard from 'Components/dashboard/dashboard';
import Today from 'Components/today/today';
import Footer from 'Components/footer/footer';
import Nav from 'Components/nav/nav';

import './ui.scss';
import '../../css/privacy.scss';

const UI = ({passedUID}) => {
    const [uid, setUid] = useState(passedUID);
    
    useEffect(() => {
        console.log('useEffect:', passedUID, uid)
        if (uid !== passedUID) setUid(passedUID)
    });
        
    return (
        <>
            <main>
                <Header />
            </main>
            <Nav />
        </>
    )
}
            // <section>
            //     <Header />
            //     <main>
            //         {!uid ? <Splash /> : <Today />}
            //     </main>
            //     <Footer />
            // </section>

const mapStateToProps = state => {
    return {
        passedUID: state.user.uid
    }
};

export default connect(mapStateToProps,null)(UI);