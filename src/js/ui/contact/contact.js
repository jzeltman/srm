import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';

import './contact.scss';

import ContactUpdates from './updates/contact-updates';
import ContactCard from './card/contact-card';
import FileUpload from '../file-upload/file-upload';
import Loading from 'Components/loading/loading';
import { contacts } from 'DB';

const Contact = (props) => {
    if (props.contacts.length === 0) {
        return (
            <div id="Contact" className="loading-wrapper">
                <Loading />
            </div>
        )
    } else {
        let { uid } = useParams();
        let contact = contacts.getContact(uid,props.contacts);

        return (
            <div id="Contact">
                <ContactCard contact={contact} />
                <ContactUpdates contact={contact} />
            </div>
        )
    }
}

const propMap = state => {
    return {
        userUID: state.user.uid,
        contacts: state.contacts
    }
}

export default withRouter(connect(propMap,null)(Contact));