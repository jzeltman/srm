import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useParams } from 'react-router-dom';

import { contacts } from 'DB';
import './header-contact.scss';

const HeaderContacts = props => {
    let { uid } = useParams();
    let contact = contacts.getContact(uid,props.contacts);
    let name = 'Loading...';
    if (props.location.pathname === '/contacts/new') name = 'New Contact';
    if (props.location.pathname === '/contacts/import') name = 'Import Contact';
    if (contact) name = contact.FN;

    const onSaveHandler = () => console.log('save');
    return (
        <header id="Contact-Header">
            <h2>{name}</h2>
            <button className="Advanced">
                <i className="fas fa-cog"></i>
            </button>
            <button id="Contact-Save" onClick={onSaveHandler}>
                <i className="fas fa-save"></i>
            </button>
        </header>
    )
}

const propMap = state => {
    return {
        contacts: state.contacts
    }
}

export default withRouter(connect(propMap,null)(HeaderContacts));
