import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { sortContacts } from 'Actions/contacts';

import './header-contacts.scss';

const HeaderContacts = props => {
    let contactPage = props.location.pathname.indexOf('/contacts/') === -1
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
                        <button title="Add New Contact">
                            <i className="fas fa-user-plus"></i>
                        </button>
                        <button title="Import Contact">
                            <i className="fas fa-file-import"></i>
                        </button>
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

const dispatcher = dispatch => {
    return {
        sortContacts: sort => {
            dispatch(sortContacts(sort))
        }
    }
}

export default withRouter(connect(null,dispatcher)(HeaderContacts));
