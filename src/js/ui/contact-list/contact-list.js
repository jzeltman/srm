import React from 'react';
import { connect } from 'react-redux'

import List from './list/list';
import ContactListEmpty from './empty/contact-list-empty';
import './contact-list.scss';

const ContactList = (props) => {
    return (
        <div id="Contact-List" className={props.contacts.length === 0 ? 'sidebar' : ''}>
            {props.contacts.length === 0 ? <ContactListEmpty /> : <List />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        contact: state.contact,
        contacts: state.contacts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sortContacts: sort => {
            dispatch(sortContacts(sort))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList);