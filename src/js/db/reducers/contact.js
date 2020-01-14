import { SET_CONTACT, SAVE_CONTACT, SAVE_PHOTO, RECEIVE_PHOTO, SIGN_OUT_USER } from '../../constants';
import { contacts, photos } from '../db';

const contact = (state = {}, action) => {
    switch (action.type) {
        case SET_CONTACT: {
            return {
                ...action.contact
            }
            break;
        } case SAVE_CONTACT: {
            if (action.contact.uid === '') contacts.create(action.contact);
            else contacts.update(action.contact);
            return {
                ...action.contact
            }
            break;
        } case SAVE_PHOTO: {
            photos.create(action.photo, state);
            return { ...state }
            break;
        } case RECEIVE_PHOTO: {
            if (action.contact.uid === state.uid) {
                return {
                    ...state,
                    PHOTO: action.photo
                }
            } else { return { ...state } }
            break;
        } case SIGN_OUT_USER: {
            return {};
            break;
        } default: {
            return state;
        }
    }
};

export default contact;
