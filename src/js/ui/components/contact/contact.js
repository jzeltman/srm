import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import { saveContact } from '../../../db/actions/contact';
import { contacts } from '../../../db/db';
import './contact.scss';

const Contact = (props) => {
    let advancedMarkup;
    const [contact,setContact] = useState(props.contact);
    const [advanced,setAdvanced] = useState(false);
    
    useEffect(() => {
        if (contact.uid !== props.contact.uid) {
            setContact(props.contact);
            setAdvanced(false);
        }
    });
    
    const onCancelHandler = e => props.changeContent('today');
    const onChangeHandler = e => setContact({ ...contact, [e.target.name]: e.target.value });

    const onDeleteHandler = e => {
        let confirmed = confirm('Are you sure you want to delete, this action cannot be undone');
        if (confirmed) {
            contacts.destroy(contact);
            props.changeContent('today');
        }
    }
    const onSaveHandler = e => props.saveContact(contact);

    if (!advanced) {
        advancedMarkup = (
            <button 
                className="Contact-Item Advanced" 
                onClick={() => setAdvanced(!advanced)}
            >Advanced</button>
        );
    } else advancedMarkup = (
        <button id="Contact-Delete" 
            className="Contact-Item"
            onClick={onDeleteHandler}>Delete</button>
    )

    return (
        <div id="Contact">
            <header>
                <button onClick={onCancelHandler} id="Contact-Return">
                    <i className="fas fa-arrow-left"></i>
                </button>
                <img src={contact.PHOTO} id="Contact-Profile" />
            </header>
            <div className="Contact-Item">
                <label htmlFor="FN">Full Name</label>
                <input type="text" value={contact.FN} name="FN" onChange={onChangeHandler} />
            </div>
            <div className="Contact-Item-Group">
                <div className="Contact-Item">
                    <label htmlFor="frequency">Frequency</label>
                    <select name="frequency" onChange={onChangeHandler} value={contact.frequency || "default"}>
                        <option disabled value="default">Contact Frequency</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="semi-annually">Semi Annually</option>
                        <option value="annually">Annually</option>
                    </select>
                </div>
                <div className="Contact-Item">
                    <label htmlFor="group">Group</label>
                    <select name="group" onChange={onChangeHandler} defaultValue={contact.group || "default"}>
                        <option disabled value="default">Group</option>
                        <option value="friends">Friends</option>
                        <option value="family">Family</option>
                        <option value="work">Work</option>
                        <option value="acquaintances">Acquaintances</option>
                    </select>
                </div>
            </div>
            <div className="Contact-Item">
                <label htmlFor="last_update">Last Contact</label>
                <input type="date" defaultValue={contact.last_update} name="last_update" onChange={onChangeHandler} />
            </div>
            <div className="Contact-Item">
                <label htmlFor="updates">Updates</label>
                <input type="textarea" defaultValue={contact.updates} name="updates" onChange={onChangeHandler} />
            </div>
            <div className="Contact-Item">
                <label htmlFor="action">Actions</label>
                <input type="textarea" defaultValue={contact.action} name="action" onChange={onChangeHandler} />
            </div>
            {advancedMarkup}
            <footer>
                <button id="Contact-Cancel" onClick={onCancelHandler}>
                    <span>Cancel </span>
                    <i className="fas fa-undo"></i>
                </button>
                <button id="Contact-Save" onClick={onSaveHandler}>
                    <span>{!contact.uid ? 'Create ' : 'Save '}</span>
                    <i className="fas fa-save"></i>
                </button>
            </footer>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        contact: state.contact
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveContact: contact => dispatch(saveContact(contact))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);