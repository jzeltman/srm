import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useParams } from 'react-router-dom';

import './contact.scss';

import ContactUpdates from './updates/contact-updates';
import ContactCard from './card/contact-card';
import FileUpload from '../file-upload/file-upload';
import Loading from 'Components/loading/loading';
import { saveContact, savePhoto } from 'Actions/contact';
import { contacts } from 'DB';

const Contact = (props) => {
    let { uid } = useParams();
    let contact = contacts.getContact(uid,props.contacts);
    if (!contact) {
        return (
            <div id="Contact" className="loading-wrapper">
                <Loading />
            </div>
        )
    } else {
        // const [contact,setContact] = useState(contacts.getContact(uid,props.contacts));
        // const [advanced,setAdvanced] = useState(false);
        // const [upload,setUpload] = useState(false);
        
        // useEffect(() => {
        //     console.log('props',props)
        //     if (
        //         contact.uid !== uid ||
        //         contact.PHOTO !== props.contact.PHOTO
        //     ) {
        //         // setContact(props.contact);
        //         setAdvanced(false);
        //     }
        // });

        // let advancedMarkup;
        // let fileUploadMarkup;
        
        // const onCancelHandler = e => props.changeContent('today');
        // const onChangeHandler = e => setContact({ ...contact, [e.target.name]: e.target.value });
        const onChangeHandler = e => console.log('contact onChangeHandler',e)

        // const onDeleteHandler = e => {
        //     let confirmed = confirm('Are you sure you want to delete, this action cannot be undone');
        //     if (confirmed) {
        //         contacts.destroy(contact);
        //         props.changeContent('today');
        //     }
        // }

        // const onSaveHandler = e => props.saveContact(contact);
        // const togglePhotoModal = e => setUpload(!upload);
        // const photoSubmitHandler = file => {
        //     console.log('photoSubmitHandler',file);
        //     props.savePhoto(file);
        //     closePhotoModal();
        // }
        // const closePhotoModal = () => setUpload(false);

        // const fileUploadConfig = {
        //     label: 'Upload/Change Profile',
        //     accept: 'image/*',
        //     submitHandler: photoSubmitHandler,
        //     submitLabel: 'Upload',
        //     cancelClose: closePhotoModal
        // }

        // if (!advanced) {
        //     advancedMarkup = (
        //         <button 
        //             className="Contact-Item Advanced" 
        //             onClick={() => setAdvanced(!advanced)}
        //         >Advanced</button>
        //     );
        // } else advancedMarkup = (
        //     <button id="Contact-Delete" 
        //         className="Contact-Item"
        //         onClick={onDeleteHandler}>Delete</button>
        // )

        // if (upload) fileUploadMarkup = <FileUpload config={fileUploadConfig} />
        // console.log('contact:', contact)

        return (
            <div id="Contact">
                <ContactCard />
                <ContactUpdates />
                <div className="Contact-Item">
                    <label htmlFor="action">Actions</label>
                    <input type="textarea" defaultValue={contact.action} name="action" onChange={onChangeHandler} />
                </div>
            </div>
        )
    }
}

const propMap = state => {
    return {
        contact: state.contact,
        contacts: state.contacts
    }
}

const dispatcher = dispatch => {
    return {
        saveContact: contact => dispatch(saveContact(contact)),
        savePhoto: photo => dispatch(savePhoto(photo))
    }
}

export default withRouter(connect(propMap,dispatcher)(Contact));