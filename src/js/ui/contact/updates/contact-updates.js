import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './contact-updates.scss';

const ContactUpdates = props => {
    const onChangeHandler = e => console.log('ContactUpdates onChangeHandler',e);

    const renderUpdates = () => {
        return props.contact.updates.map((update,key) => (
            <div className="Contact-Update" key={key}>
                <label htmlFor={`update-${key}`}>{update.date}</label>
                <input 
                    type="textarea" 
                    defaultValue={update.update} 
                    name={`update-${key}`}
                    onChange={onChangeHandler} 
                />
            </div>
            
        ));
    }

    return (
        <div className="Contact-Item">
            <label htmlFor="updates">Updates</label>
            <input 
                type="textarea" 
                placeholder="Add a new update" 
                name="updates" 
                onChange={onChangeHandler} 
            />
            {renderUpdates()}
        </div>
    )
}

export default withRouter(connect()(ContactUpdates));