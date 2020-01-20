import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useParams } from 'react-router-dom';
import { contacts } from 'DB';

import './contact-updates.scss';

const ContactUpdates = props => {
    let { uid } = useParams();
    let contact = contacts.getContact(uid,props.contacts);
    console.log('contact updates:', contact.updates)

    const onChangeHandler = e => console.log('ContactUpdates onChangeHandler',e);

    const renderUpdates = () => {
        return contact.updates.map((update,key) => (
            <div className="Contact-Update">
                <label htmlFor={`update-${key}`}>{update.date}</label>
                <input 
                    key={key}
                    type="textarea" 
                    defaultValue={update.update} 
                    name={`update-${key}`}
                    onChange={onChangeHandler} 
                />
            </div>
            
        ));
    }

    return (
        <div className="Contact-Item">
            <label htmlFor="updates">Updates</label>
            <input 
                type="textarea" 
                placeholder="Add a new update" 
                name="updates" 
                onChange={onChangeHandler} 
            />
            {renderUpdates()}
        </div>
    )
}

const propMap = state => {
    return {
        contacts: state.contacts
    }
}

export default withRouter(connect(propMap,null)(ContactUpdates));