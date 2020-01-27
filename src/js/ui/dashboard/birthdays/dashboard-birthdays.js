import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { isContactsBirthday } from 'Utils/birthday';


import timeToContact from 'Utils/timeToContact';

import './dashboard-birthdays.scss';

const DashboardBirthdays = props => {
    const contacts = props.contacts.filter(contact => timeToContact(contact.last_update,contact.frequency));
    console.log('contacts:', contacts);

    let markup;

    if (contacts.length === 0) markup = (<div><strong>No Birthdays Today</strong></div>);
    else {
        markup = (
            <ul>
                {contacts.filter(contact => isContactsBirthday(contact)).map((contact,key) => (
                    <li key={key}>
                        <Link to={`/contacts/${contact.uid}`}>
                            {contact.FN}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <h2>
                <span>Today's Birthdays</span>
                <i className="fas fa-birthday-cake"></i>
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

export default withRouter(connect(propMap,null)(DashboardBirthdays));
