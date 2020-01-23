import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';

import timeToContact from 'Utils/timeToContact';

import GridItem from './dashboard-list-grid';
import './dashboard-list.scss';


const DashboardList = props => {
    const contacts = props.contacts.filter(contact => timeToContact(contact.last_update,contact.frequency));
    console.log('contacts:', contacts);

    let markup;

    if (contacts.length === 0) markup = <div><strong>Doing great!</strong></div>
    else {
        markup = (
            <ul id="Dashboard-List-Contact-Grid">
                {contacts.map((contact,key) => <GridItem key={key} contact={contact} />)}
            </ul>
        );
    }

    return markup;
}

const propMap = state => {
    return {
        contacts: state.contacts
    }
}

export default withRouter(connect(propMap,null)(DashboardList));
