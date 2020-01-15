import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import FileUpload from '../file-upload/file-upload';
import { saveContact, savePhoto } from '../../../db/actions/contact';
import { loading } from '../../../db/actions/ui';
import { contacts } from '../../../db/db';

import Updates from './updates/updates';

import './contact.scss';

const Contact = (props) => {
    const [contact,setContact] = useState(props.contact);
    const [advanced,setAdvanced] = useState(false);
    const [upload,setUpload] = useState(false);
    
    useEffect(() => {
        if (
            contact.uid !== props.contact.uid ||
            contact.PHOTO !== props.contact.PHOTO
        ) {
            setContact(props.contact);
            setAdvanced(false);
        }
    });

    let advancedMarkup;
    let fileUploadMarkup;
    let updatesMarkup;
    let actionsMarkup;

    let headerBackgroundCSS = contact.PHOTO === '' ?
        { backgroundColor: '#ccc' } :
        { backgroundImage: `url(${contact.PHOTO})` };
    
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
    const togglePhotoModal = e => setUpload(!upload);
    const photoSubmitHandler = file => {
        console.log('photoSubmitHandler',file);
        props.savePhoto(file);
        closePhotoModal();
    }
    const closePhotoModal = () => setUpload(false);

    const fileUploadConfig = {
        label: 'Upload/Change Profile',
        accept: 'image/*',
        submitHandler: photoSubmitHandler,
        submitLabel: 'Upload',
        cancelClose: closePhotoModal
    }

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

    if (upload) fileUploadMarkup = <FileUpload config={fileUploadConfig} />

    if (contact.updates.length) {

    }

    return (
        <div id="Contact">
            <header>
                <button onClick={onCancelHandler} id="Contact-Return">
                    <i className="fas fa-arrow-left"></i>
                </button>
                <h2>{contact.FN}</h2>
                <button 
                    className="Advanced" 
                    onClick={() => setAdvanced(!advanced)}
                >
                    <span>{advanced ? 'Hide Advanced ' : 'Show Advanced '}</span>
                    <i className="fas fa-cog"></i>
                </button>
                <button id="Contact-Save" onClick={onSaveHandler}>
                    <span>{!contact.uid ? 'Create ' : 'Save '}</span>
                    <i className="fas fa-save"></i>
                </button>
                {fileUploadMarkup}
            </header>
            <section>
                <div id="Contact-Card">
                    <div id="Contact-Photo" className={contact.PHOTO === '' ? 'empty' : 'full'} style={headerBackgroundCSS}>
                        <button onClick={togglePhotoModal} id="Contact-Profile-Upload">
                            <i className="fas fa-upload"></i>
                        </button>
                    </div>
                    <div id="Contact-Card-Items">
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
                        <div className="Contact-Item-Group">
                            <div className="Contact-Item">
                                <label htmlFor="last_update">Last Contact</label>
                                <input type="date" defaultValue={contact.last_update} name="last_update" onChange={onChangeHandler} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Contact-Lists">
                    <Updates />
                    <div className="Contact-Item">
                        <label htmlFor="action">Actions <i className="fas fa-bell"></i></label>
                        <input type="textarea" defaultValue={contact.action} name="action" onChange={onChangeHandler} />
                    </div>
                </div>
            </section>

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
        saveContact: contact => dispatch(saveContact(contact)),
        savePhoto: photo => dispatch(savePhoto(photo))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);