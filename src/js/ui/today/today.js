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