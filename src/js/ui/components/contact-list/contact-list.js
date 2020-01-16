import React from 'react';
import { connect } from 'react-redux'

import { sortContacts } from 'Actions/contacts';
import List from './list/list';
import './contact-list.scss';

const ContactList = (props) => {
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