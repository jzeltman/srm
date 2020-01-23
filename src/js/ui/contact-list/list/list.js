import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { LETTERS, GROUPS, FREQUENCY } from 'Constants';
import timeToContact from 'Utils/timeToContact';

import './list.scss';

const List = props => {

    let group, contactField;
    if (props.ui.sort === 'alpha') {
        group = LETTERS;
        contactField = 'FN';
    }
    if (props.ui.sort === 'group') {
        group = GROUPS;
        contactField = 'group';
    }
    if (props.ui.sort === 'date') {
        group = FREQUENCY;
        contactField = 'frequency';
    }

    const renderFields = (contact) => {
        if (
            props.ui.deviceClass !== 'mobile' &&
            props.ui.sort === 'alpha' && 
            props.location.pathname.indexOf('/contacts/') === -1
        ) {
            return (
                <>
                    <div>
                        {!contact.BDAY ? <></> :
                            <span className="Contact-Tag --BDAY">
                                <span>{contact.BDAY}</span>
                                <i className="fas fa-birthday-cake"></i>
                            </span>
                        }
                        <span className="Contact-Tag --Frequency">{contact.frequency}</span>
                        <span className="Contact-Tag --Group">{contact.group}</span>
                    </div>
                </>
            )
        }
    }

    const renderContact = (contact,contactKey) => {
        const status = timeToContact(contact.last_update,contact.frequency);
        const statusClassName = status ? "fa-user-clock" : "fa-thumbs-up";
        return (
            <li 
                key={`contact-${contactKey}`} 
                className={`Contact-List-Item frequency-${contact.frequency}`}
            >
                <Link to={`/contacts/${contact.uid}`}>
                    <div>
                        <span className="Contact-Status">
                            <i className={`fas ${statusClassName}`}></i>
                        </span>
                        <span>
                            {contact.PHOTO ? 
                                <div style={{ backgroundImage: `url(${contact.PHOTO})` }} className="Contact-Photo" /> : 
                                <i className="fas fa-user-circle Contact-Photo"></i>
                            }
                            {contact.FN}
                        </span>
                    </div>
                    {renderFields(contact)}
                </Link>
            </li>
        );
    }

    const filterContacts = match => {
        if (props.ui.sort === 'alpha') {
            return props.contacts.filter(contact => contact[contactField].toLowerCase().startsWith(match.toLowerCase()));
        } else {
            return props.contacts.filter(contact => contact[contactField] === match);
        }
    }

    const groupedList = () => {
        if (props.contacts.length === 0) return <></>;
        else {
            return group.map((item,itemKey) => {
                const groupContacts = filterContacts(item);
                if (groupContacts.length === 0) return <></>
                else {
                    return (
                        <li key={`contact-list-${itemKey}`} className="Contact-Group-Parent">
                            <header className="Contact-Group-Header sticky">{item}</header>
                            <ul className="Contact-Group">
                                {groupContacts.map((contact,contactKey) => renderContact(contact,contactKey))}
                            </ul>
                        </li>
                    )
                }
            })
        }
    }

    return (
        <ul id="Contact-List-Items">
            {groupedList()}
        </ul>
    )
}

const propMap = state => {
    return {
        contacts: state.contacts,
        ui: state.ui
    }
};

const dispatcher = dispatch => {
    return {
        setLetter: (letter) => dispatch(setLetter(letter))
    }
}

export default withRouter(connect(propMap,dispatcher)(List))