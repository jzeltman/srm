import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './contact-updates.scss';

const ContactUpdates = props => {
    const [tab,setTab] = useState('updates');
    let placeholder = tab === 'updates' ? 'Add a new update' : 'Add a new action'
    const onChangeHandler = e => console.log('ContactUpdates onChangeHandler',e);

    const renderList = () => {
        let list = tab === 'updates' ? props.contact.updates : props.contact.action;
        return list.map((update,key) => (
            <div className="Contact-Update" key={key}>
                <label htmlFor={`${tab}-${key}`}>{update.date}</label>
                <input 
                    type="textarea" 
                    defaultValue={update.update} 
                    name={`${tab}-${key}`}
                    onChange={onChangeHandler} 
                />
            </div>
        ));
    }

    return (
        <div className={`Contact-Updates ${tab}`}>
            <label 
                htmlFor="updates" 
                className={tab === 'updates' ? 'selected' : ''}
                onClick={() => setTab('updates')}
            >
                <span>Updates</span>
                <i className={`${tab === 'updates' ? 'far' : 'fas'} fa-sticky-note`}></i>
            </label>
            <label 
                htmlFor="actions" 
                className={tab === 'action' ? 'selected' : ''}
                onClick={() => setTab('action')}
            >
                <span>Actions</span>
                <i className={`${tab === 'action' ? 'far' : 'fas'} fa-bell`}></i>
            </label>
            <div className="Contact-Updates-List">
                <div className="Contact-Updates-New">
                    <input 
                        type="textarea" 
                        placeholder={placeholder}
                        name={tab}
                        onChange={onChangeHandler} 
                    />
                    <input type="date" />
                </div>
                {renderList()}
            </div>
        </div>
    )
}

export default withRouter(connect()(ContactUpdates));