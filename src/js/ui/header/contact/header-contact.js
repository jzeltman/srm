import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useParams } from 'react-router-dom';

import { contacts } from 'DB';
import './header-contact.scss';

const HeaderContacts = props => {
    let { uid } = useParams();
    let contact = contacts.getContact(uid,props.contacts);
    if (!contact) return <></>
    else {
        console.log('contact:', contact)
    
        const onSaveHandler = () => console.log('save');
        return (
            <header id="Contact-Header">
                <h2>{contact.FN}</h2>
                <button className="Advanced">
                    <i className="fas fa-cog"></i>
                </button>
                <button id="Contact-Save" onClick={onSaveHandler}>
                    <i className="fas fa-save"></i>
                </button>
            </header>
        )
    }
}

const propMap = state => {
    return {
        contacts: state.contacts
    }
}

export default withRouter(connect(propMap,null)(HeaderContacts));
