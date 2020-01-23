import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import './dashboard.scss';

import DashboardList from './list/dashboard-list';
import DashboardActions from './actions/dashboard-actions';
import DashboardBirthdays from './birthdays/dashboard-birthdays';

const Dashboard = (props) => {

    return (
        <>
            <aside id="Dashboard-Aside">
                <DashboardActions />
                <DashboardBirthdays />
            </aside>
            <section id="Dashboard-Section">
                <DashboardList />
                <aside id="Dashboard-Suggestions">
                    <h2>Suggested Contact</h2>
                </aside>
            </section>
        </>
    )
}

const propMap = state => {
    return {
        user: state.user,
        contact: state.contact
    }
}

const dispatcher = dispatch => {
    return {
        setContact: id => dispatch(setContact(id))
    }
}

export default connect(propMap,null)(Dashboard);