import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { sortContacts, createEmptyContact } from 'Actions/contacts';

import './header-contacts.scss';

const HeaderContacts = props => {
    let contactPage = props.location.pathname.indexOf('/contacts/') === -1
    let history = useHistory();

    const newContactHandler = () => {
        createEmptyContact(props.userUID);
        history.push('/contacts/new')
    }

    const renderElements = () => {
        if (contactPage) {
            return (
                <>
                    <div id="Contact-Search">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search" />
                    </div>
                    <div>
                        <button title="Grid View">
                            <i className="fas fa-th-large"></i>
                        </button>
                        <button 
                            title="Add New Contact" 
                            onClick={newContactHandler}
                        >
                            <i className="fas fa-user-plus"></i>
                        </button>
                        <Link to="/contacts/import" title="Import Contact">
                            <i className="fas fa-file-import"></i>
                        </Link>
                        <button title="Sort">
                            <i className="fas fa-sort-amount-up"></i>
                        </button>
                        <button title="Filter">
                            <i className="fas fa-filter"></i>
                        </button>
                    </div>
                </>
            )
        } else {
            return (
                <Link to="/contacts">
                    <i className="fas fa-arrow-left"></i>
                </Link>
            )
        }
    }
    return (
        <header id="Header-Contacts" className={contactPage ? '' : 'contact-page'}>
            <h2 id="Contact-List-Title">
                <i className="fas fa-address-book"></i>
                <span> Contacts</span>
            </h2>
            {renderElements()}
        </header>
    );
}


/* <label htmlFor="for">Sort</label>
<select name="sort" onChange={e => props.sortContacts(e.target.value)}>
    <option value="alpha">A-Z</option>
    <option value="group">Group</option>
    <option value="date">Date</option>
</select> */

const propMap = state => {
    return {
        userUID: state.user.uid
    }
}

const dispatcher = dispatch => {
    return {
        sortContacts: sort => {
            dispatch(sortContacts(sort))
        }
    }
}

export default withRouter(connect(propMap,dispatcher)(HeaderContacts));
