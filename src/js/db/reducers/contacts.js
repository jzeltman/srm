import { 
    GET_CONTACTS, 
    SET_CONTACT,
    SORT_CONTACTS, 
    SAVE_CONTACT, 
    SIGN_OUT_USER,
    CREATE_EMPTY_CONTACT,
    UPDATE_CONTACT
} from 'Constants';
import sortContacts from 'Utils/sort_contacts';
import { contacts as DBContacts, photos } from 'DB';

const contacts = (state = [], action) => {
    switch (action.type) {
        case GET_CONTACTS: {
            return [
                ...state,
                ...sortContacts(action.contacts,'alpha')
            ];
        } case SORT_CONTACTS: {
            return sortContacts(state,action.sort);
        } case SET_CONTACT: {
            let exists = false;
            let contacts = [...state].map( contact => {
                if (action.contact.uid === contact.uid) {
                    exists = true;
                    return action.contact;
                } else return contact;
            });
            if (!exists) contacts.push(action.contact);
            return sortContacts(contacts,'alpha');
        } case SIGN_OUT_USER: {
            return [];
        } case SAVE_CONTACT: {
            if (action.contact.uid === '') DBContacts.create(action.contact);
            else DBContacts.update(action.contact);
            return state;
        }
        case UPDATE_CONTACT: {
            return [
                ...state.map( contact => {
                    if (contact.uid !== action.contact.uid) return contact;
                    else {
                        if (action.key !== 'updates' && action.key !== 'action') {
                            return {
                                ...action.contact,
                                [action.key]: action.value
                            }
                        } else {
                            let newValue = [...contact[action.key]]
                            newValue.unshift(action.value)
                            return {
                                ...action.contact,
                                [action.key]: newValue
                            }
                        }
                    }
                })
            ];
        }
        case CREATE_EMPTY_CONTACT:
        default: {
            return state;
        }
    }
};

export default contacts;
