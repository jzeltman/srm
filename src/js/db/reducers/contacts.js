import { GET_CONTACTS, SORT_CONTACTS, SAVE_CONTACT, SIGN_OUT_USER } from 'Constants';
import sortContacts from 'Utils/sort_contacts';

const contacts = (state = [], action) => {
    switch (action.type) {
        case GET_CONTACTS: {
            return [
                ...state,
                ...sortContacts(action.contacts,'alpha')
            ];
            break;
        } case SORT_CONTACTS: {
            return sortContacts(state,action.sort);
            break;
        } case SAVE_CONTACT: {
            let exists = false;
            let contacts = [...state].map( contact => {
                if (action.contact.uid === contact.uid) {
                    exists = true;
                    return action.contact;
                } else return contact;
            });
            if (!exists) contacts.push(action.contact);
            return sortContacts(contacts,'alpha');
            break;
        } case SIGN_OUT_USER: {
            return [];
            break;
        } default: {
            return state;
            break;
        }
    }
};

export default contacts;
