import React from 'react';
import timeToContact from '../../../app/utils/timeToContact';

import './today.scss';

const Today = (props) => {
    let content;

    const renderContacts = () => {
        let todaysContacts = [];
        props.data.forEach((contact,key) => {
            if (timeToContact(contact.last_update,contact.frequency)) {
                todaysContacts.push((
                    <li key={key}
                        className="Today-Contact-Item" 
                        onClick={e => props.changeContent(e,contact)}
                    >
                        <img src={contact.PHOTO} />
                        <div>
                            <strong>{contact.FN}</strong>
                            <span data-frequency={contact.frequency}>{contact.frequency}</span>
                        </div>
                    </li>
                )); 
            }
        });

        return (
            <ul id="Today-Contacts">{todaysContacts}</ul>
        )
    }
    console.log('props:', props)
    if (props.data === null) content = <span id="Today-Contacts">You're doing great!</span>;
    else content = renderContacts();
    
    return (
        <div id="Today">
            <h1>Today's Contacts</h1>
            {content}
        </div>
    )
}

export default Today;