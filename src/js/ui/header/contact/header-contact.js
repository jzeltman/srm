import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import { saveContacts } from 'Actions/contacts';

import { contacts } from 'DB';
import './header-contact.scss';

const HeaderContacts = props => {
    let { uid } = useParams();
    let contact = contacts.getContact(uid,props.contacts);
    let name = 'Loading...';

    if (props.location.pathname === '/contacts/new') name = 'New Contact';
    else if (props.location.pathname === '/contacts/import') name = 'Import Contact';
    else if (contact) name = contact.FN;

    return (
        <header id="Contact-Header">
            <h2>{name}</h2>
            <button className="Advanced">
                <i className="fas fa-cog"></i>
            </button>
            <button id="Contact-Save" onClick={() => props.save(contact)}>
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

const dispatcher = dispatch => {
    return {
        save: (contact) => dispatch(saveContacts(contact))
    }
}

export default withRouter(connect(propMap,dispatcher)(HeaderContacts));
