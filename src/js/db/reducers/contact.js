import { SET_CONTACT, SAVE_CONTACT } from '../../constants';
import { contacts } from '../db';

const contact = (state = {}, action) => {
    switch (action.type) {
        case SET_CONTACT: {
            return {
                ...action.contact
            }
        } case SAVE_CONTACT: {
            if (action.contact.uid === '') contacts.create(action.contact);
            else contacts.update(action.contact);
            return {
                ...action.contact
            }
        } default: {
            return state;
        }
    }
};

export default contact;
