import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import './dashboard.scss';

import Today from '../today/today';
import Contact from '../contact/contact';
import ContactList from '../contact-list/contact-list';
import ImportVCard from '../import-vcard/import-vcard';

import { setContact } from 'Actions/contact';


const Dashboard = (props) => {
    let [content,setContent] = useState(!props.contact.uid ? 'today' : 'contact');

    let DashboardContent;
    if (content === 'today') DashboardContent = Today;
    if (content === 'import') DashboardContent = ImportVCard;
    if (content === 'contact') DashboardContent = Contact;
    
    const changeContentHandler = (contactData) => {
        switch(contactData) {
            case 'today': {
                setContent('today');
                break;
            } case 'import': {
                props.setContact(props.user.uid);
                setContent('import');
                break;
            } case 'new': {
                props.setContact(props.user.uid);
                setContent('contact');
                break;
            } default: {
                props.setContact(contactData);
                setContent('contact');
                break;
            }
        }
    }

    return (
        <section id="Dashboard">
            <ContactList changeContent={changeContentHandler} />
            <div id="Dashboard-Content">
                <DashboardContent changeContent={changeContentHandler} />
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        contact: state.contact
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setContact: id => {
            dispatch(setContact(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);