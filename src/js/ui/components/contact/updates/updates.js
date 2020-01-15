import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { KEY_ENTER } from 'Constants';
import { newUpdate } from 'Actions/contact';

import './updates.scss';

const Updates = props => {
    console.log('props:', props)
    let updatesMarkup;
    const [newUpdate,setNewUpdate] = useState('');
    const [updates,setUpdates] = useState(props.contact.updates);
    console.log('updates:', updates)
    const onNewUpdateHandler = e => {
        if (e.keyCode === KEY_ENTER) {
            props.newUpdate({
                date: new Date().toLocaleDateString(),
                update: e.target.value
            });
        } else setNewUpdate(e.target.value);
    }

    useEffect(() => {
        console.log('useEffect',props,updates, updates !== props.contact.updates);
        if (updates !== props.contact.updates) {
            console.log('setUpdates')
            setUpdates(props.contact.updates);
        }
    });

    updatesMarkup = updates.map((update,key) => (
        <li key={key}>
            <input value={update.update} />
            <strong>{update.date}</strong>
        </li>
    ));

    return (
        <div className="Contact-Item">
            <label htmlFor="updates">Updates <i className="fas fa-sticky-note"></i></label>
            <div>
                <input type="textarea" defaultValue={newUpdate} name="updates" onKeyDown={onNewUpdateHandler} />
                <strong>{new Date().toLocaleDateString()}</strong>
            </div>
            <ul id="Contact-Updates">{updatesMarkup}</ul>
        </div>
    )
};

const propMap = state => {
    return {
        contact: state.contact
    }
}

const dispatcher = dispatch => {
    return { 
        newUpdate: update => dispatch(newUpdate(update))
    }
}

export default connect(propMap,dispatcher)(Updates)