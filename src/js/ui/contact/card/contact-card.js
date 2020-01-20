import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ContactCard = props => {
    let contact = props.contact;

    let headerBackgroundCSS = contact.PHOTO === '' ?
        { backgroundColor: '#ccc' } :
        { backgroundImage: `url(${contact.PHOTO})` };

    const togglePhotoModal = e => console.log('togglePhotoModal',e);
    const onChangeHandler = e => console.log('onChangeHandler',e);
    
    return (
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
    )
}

const dispatcher = dispatch => {
    return {
        saveContact: contact => dispatch(saveContact(contact)),
        savePhoto: photo => dispatch(savePhoto(photo))
    }
}

export default withRouter(connect(null,dispatcher)(ContactCard));