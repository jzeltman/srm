import React from 'react';
import { connect } from 'react-redux'

import timeToContact from '../../../app/utils/timeToContact';

import './today.scss';

const Today = (props) => {
    console.log('Today props:', props)
    let content;

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
    if (props.contacts === null) content = <span id="Today-Contacts">You're doing great!</span>;
    else content = renderContacts();
    
    return (
        <div id="Today">
            <h1>Today's Contacts</h1>
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

// const mapDispatchToProps = dispatch => {
//     return {
//         setContact: id => {
//             dispatch(setContact(id))
//         }
//     }
// }

export default connect(
    mapStateToProps,
    null
)(Today);