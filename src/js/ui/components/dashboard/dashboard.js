import React, { useState, useEffect } from 'react';
import './dashboard.scss';

import Today from '../today/today';
import Contact from '../contact/contact';
import ContactList from '../contact-list/contact-list';
import ImportVCard from '../import-vcard/import-vcard';

import ContactModel from '../../../models/contact';

const Dashboard = ({user,data,db}) => {
    let [contact,setContact] = useState(null);
    let [content,setContent] = useState(!contact ? 'today' : 'contact');

    let DashboardContent;
    if (content === 'today') DashboardContent = Today;
    if (content === 'import') DashboardContent = ImportVCard;
    if (content === 'contact') DashboardContent = Contact;

    const changeContentHandler = (contactData) => {
        switch(contactData) {
            case 'today': {
                setContent('today');
                break;
            }
            case 'import': {
                setContact({ ...ContactModel, user: user.uid });
                setContent('import');
                break;
            } case 'new': {
                setContact({ ...ContactModel, user: user.uid });
                setContent('contact');
                break;
            } default: {
                setContact(contactData);
                setContent('contact');
                break;
            }
        }
    }

    return (
        <section id="Dashboard">
            <ContactList 
                user={user} 
                data={data} 
                changeContent={changeContentHandler} 
            />
            <div id="Dashboard-Content">
                <DashboardContent 
                    user={user}
                    data={data}
                    contact={contact} 
                    changeContent={changeContentHandler} 
                />
            </div>
        </section>
    )
}

export default Dashboard;