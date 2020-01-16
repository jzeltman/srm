import React from 'react';
import { connect } from 'react-redux'

import List from './list/list';

import { sortContacts } from 'Actions/contacts';
import timeToContact from 'Utils/timeToContact';
import './contact-list.scss';

const ContactList = (props) => {
    const renderContactList = () => {
        if (props.contacts === null || props.contacts.length === 0) {
            return <li>Look's like you don't have any contacts. Let's make one</li>;
        } else {
            return props.contacts.map((contact,key) => {
                const status = timeToContact(contact.last_update,contact.frequency);
                const statusClassName = status ? "fa-user-clock" : "fa-thumbs-up";
                return (
                    <li 
                        key={key} 
                        onClick={() => props.changeContent(contact)} 
                        className={`Contact-List-Item frequency-${contact.frequency}`}
                    >
                        <span>{contact.FN}</span> 
                        <span><i className={`fas ${statusClassName}`}></i></span> 
                    </li>
                );
            });
        }
    }

    return (
        <div id="Contact-List">
            <header>
                <h2 id="Contact-List-Title">
                    <i className="fas fa-address-book"></i>
                    <span> Contacts</span>
                </h2>
                <div>
                    <label htmlFor="for">Sort</label>
                    <select name="sort" onChange={e => props.sortContacts(e.target.value)}>
                        <option value="alpha">A-Z</option>
                        <option value="group">Group</option>
                        <option value="date">Date</option>
                    </select>
                </div>
            </header>
            <List changeContent={props.changeContent} />
            <footer>
                <img src="https://picsum.photos/300/250/" id="advert" />
                <i className="fas fa-ad"></i>
            </footer>
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