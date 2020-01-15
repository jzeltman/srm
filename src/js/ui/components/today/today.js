import React, { useState } from 'react';
import { connect } from 'react-redux'

import timeToContact from 'Utils/timeToContact';

import './today.scss';

const Today = (props) => {
    console.log('Today props:', props)
    let content;

    const [tab,setTab] = useState('today');

    const toggleTab = tab => setTab(tab);

    const renderContacts = () => {
        let todaysContacts = [];
        props.contacts.forEach((contact,key) => {
            if (timeToContact(contact.last_update,contact.frequency)) {

                let liStyle = { backgroundImage: `url(${contact.PHOTO})` }
                todaysContacts.push((
                    <li key={key}
                        className={`Today-Contact-Item ${contact.PHOTO ? 'photo' : 'empty'}`}
                        onClick={e => props.changeContent(contact)}
                        style={liStyle}
                    >
                        <div>
                            <strong>{contact.FN}</strong>
                            <span data-frequency={contact.frequency}>{contact.frequency}</span>
                            <span data-group={contact.group} className="Contact-Group">{contact.group}</span>
                        </div>
                    </li>
                )); 
            }
        });

        return (
            <ul id="Today-Contacts">{todaysContacts}</ul>
        )
    }
    if (tab === 'today') {
        if (props.contacts === null) content = <span id="Today-Contacts">You're doing great!</span>;
        else content = renderContacts();
    } else if (tab === 'actions') {
        content = <span>today's actions</span>;
    } else if (tab === 'birthdays') {
        content = <span>today's birthdays</span>;
    }
    
    return (
        <div id="Today">
            <header id="Today-Header">
                <h2 className={tab === 'today' ? 'selected' : ''} 
                    onClick={() => toggleTab('today')}>
                    <span>Today's Contacts</span>
                    <i className="fas fa-calendar-day"></i>
                </h2>
                <h2 className={tab === 'actions' ? 'selected' : ''} 
                    onClick={() => toggleTab('actions')}>
                    <span>Actions</span>
                    <i className="fas fa-bell"></i>
                </h2>
                <h2 className={tab === 'birthdays' ? 'selected' : ''} 
                    onClick={() => toggleTab('birthdays')}>
                    <span>Birthdays</span>
                    <i className="fas fa-birthday-cake"></i>
                </h2>
            </header>
            {content}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        contact: state.contact,
        contacts: state.contacts
    }
}

export default connect(
    mapStateToProps,
    null
)(Today);