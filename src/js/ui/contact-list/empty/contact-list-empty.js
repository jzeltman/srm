import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useHistory } from 'react-router-dom';

import ContactModel from 'Models/contact';
import { setContact, syncData } from 'Actions/contacts';

const ContactListEmpty = props => {
    let [loading,setLoading] = useState(false);
    let history = useHistory();

    const newContactHandler = (to) => {
        props.setContact({ ...ContactModel, user: props.userUID });
        history.push(to);
    }
    
    const syncHandler = () => {
        setLoading(true);
        props.sync(props.userUID)
    }

    return (
        <>
            <aside id="Contact-List-Empty">
                <div>
                    <h3>Got some data already?</h3>
                    <p>Sync from the server</p>
                    <button onClick={syncHandler} className="button secondary">
                        <span>Sync Data</span>
                        <i className={`fas fa-sync-alt ${loading}`}></i>
                    </button>
                </div>
            </aside>
            <section>
                <h3>Looks like there's nothing here!</h3>
                <p>Let's fix that by adding your first contact</p>
                <div>
                    <button 
                        className="button primary"
                        title="Add New Contact" 
                        onClick={() => newContactHandler('/contacts/new')}
                    >
                        <span>Add Contact</span>
                        <i className="fas fa-user-plus"></i>
                    </button>
                    <button 
                        className="button tertiary"
                        title="Import Contact" 
                        onClick={() => newContactHandler('/contacts/import')}
                    >
                        <span>Import Contact</span>
                        <i className="fas fa-file-import"></i>
                    </button>
                </div>
            </section>
        </>
    )
}

const propMap = state => {
    return {
        contacts: state.contacts,
        ui: state.ui,
        userUID: state.user.uid
    }
};

const dispatcher = dispatch => {
    return {
        setContact: contact => dispatch(setContact(contact)),
        sync: uid => syncData(uid)
    }
}

export default withRouter(connect(propMap,dispatcher)(ContactListEmpty))