import React from 'react';
import { connect } from 'react-redux'
import { updateAndSaveContact } from 'Actions/contacts';

const DashboardGridButtons = props => {
    
    return (
        <footer className="Dashboard-Grid-Buttons">
            <header>
                <button 
                    className="contacted"
                    onClick={() => props.contacted(props.contact)}
                >
                    <i className="far fa-check-square"></i>
                </button>
                <button 
                    className="add-update"
                    onClick={() => props.setExpanded('update')}
                >
                    <i className="far fa-sticky-note"></i>
                    <span>Update +</span>
                </button>
                <button 
                    className="add-action"
                    onClick={() => props.setExpanded('action')}
                >
                    <i className="far fa-bell"></i>
                    <span>Action +</span>
                </button>
            </header>
        </footer>
    )
}

const dispatcher = dispatch => {
    return {
        contacted: contact => {
            dispatch(updateAndSaveContact(contact,'last_update',new Date().toISOString()));
        }
    }
}

export default connect(null,dispatcher)(DashboardGridButtons);