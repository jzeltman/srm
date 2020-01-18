import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { sortContacts } from 'Actions/contacts';

const HeaderContacts = props => {
    return (
        <>
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
        </>
    );
}

const dispatcher = dispatch => {
    return {
        sortContacts: sort => {
            dispatch(sortContacts(sort))
        }
    }
}

export default withRouter(connect(null,dispatcher)(HeaderContacts));
