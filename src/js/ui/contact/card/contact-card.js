import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setContact } from 'Actions/contacts';
import Input from 'Components/input/input';

import './contact-card.scss';

const ContactCard = props => {
    let [contact,setContact] = useState(props.contact);
    
    useEffect(() => {
        if (contact.uid !== props.contact.uid) setContact(props.contact);
    });

    let headerBackgroundCSS = contact.PHOTO === '' ?
        { backgroundColor: '#ccc' } :
        { backgroundImage: `url(${contact.PHOTO})` };

    const togglePhotoModal = e => console.log('togglePhotoModal',e);
    const onChangeHandler = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const onInputBlur = () => {
        props.save(contact);
    }
    
    return (
        <div id="Contact-Card">
            <div id="Contact-Photo" className={contact.PHOTO === '' ? 'empty' : 'full'} style={headerBackgroundCSS}>
                <button onClick={togglePhotoModal} id="Contact-Profile-Upload">
                    <i className="fas fa-upload"></i>
                </button>
            </div>
            <div id="Contact-Card-Items">
                <div className="Contact-Item">
                    <Input
                        name="FN"
                        label="Full Name"
                        defaultValue={contact.FN}
                        onChange={onChangeHandler} 
                        onBlur={onInputBlur}
                    />
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
                <div className="Contact-Item-Group">
                    <div className="Contact-Item">
                        <Input
                            name="last_update"
                            label="Last Contact"
                            defaultValue={contact.last_update}
                            onChange={onChangeHandler} 
                            onBlur={onInputBlur}
                            type="date"
                        />
                    </div>
                    <div className="Contact-Item">
                        <Input
                            name="BDAY"
                            label="Birthday"
                            defaultValue={contact.BDAY}
                            onChange={onChangeHandler} 
                            onBlur={onInputBlur}
                            type="date"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const propMap = state => {
    return {
        contacts: state.contacts
    }
}

const dispatcher = dispatch => {
    return {
        save: contact => dispatch(setContact(contact)),
        savePhoto: photo => dispatch(savePhoto(photo))
    }
}

export default withRouter(connect(propMap,dispatcher)(ContactCard));