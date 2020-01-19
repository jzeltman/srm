import React from 'react';
import { connect } from 'react-redux'

import List from './list/list';
import './contact-list.scss';

const ContactList = (props) => {
    return (
        <div id="Contact-List">
            <List changeContent={props.changeContent} />
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