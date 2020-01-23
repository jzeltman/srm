import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';

import timeToContact from 'Utils/timeToContact';

import './dashboard-actions.scss';

const DashboardActions = props => {
    const contacts = props.contacts.filter(contact => timeToContact(contact.last_update,contact.frequency));
    console.log('contacts:', contacts);

    let markup;

    if (contacts.length === 0) markup = (<div><strong>No Actions Today</strong></div>);
    else {
        markup = (
            <ul>
                {contacts.map((contact,key) => <li key={key}>{contact.FN}</li>)}
            </ul>
        );
    }

    return (
        <div>
            <h2>
                <span>Today's Actions</span>
                <i className="fas fa-bell"></i>
            </h2>
            {markup}
        </div>   
    );
}

const propMap = state => {
    return {
        contacts: state.contacts
    }
}

export default withRouter(connect(propMap,null)(DashboardActions));
