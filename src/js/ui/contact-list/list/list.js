import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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

    const renderContact = (contact,contactKey) => {
        const status = timeToContact(contact.last_update,contact.frequency);
        const statusClassName = status ? "fa-user-clock" : "fa-thumbs-up";
        return (
            <li 
                key={`contact-${contactKey}`} 
                onClick={() => props.changeContent(contact)} 
                className={`Contact-List-Item frequency-${contact.frequency}`}
            >
                <span>{contact.FN}</span> 
                <span><i className={`fas ${statusClassName}`}></i></span> 
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
        <section>
            <ul id="Contact-List-Items">
                <li key="import" className="Contact-List-Admin" onClick={() => props.changeContent('import')}>Import Contact <i className="fas fa-file-import"></i></li>
                <li key="new" className="Contact-List-Admin" onClick={() => props.changeContent('new')}>New Contact <i className="fas fa-user-plus"></i></li>
                {groupedList()}
            </ul>
        </section>
        
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

export default connect(propMap,dispatcher)(List)