import { 
    GET_CONTACTS, 
    SET_CONTACT,
    SORT_CONTACTS, 
    SAVE_CONTACT, 
    RECEIVE_CONTACT,
    CREATE_EMPTY_CONTACT 
} from 'Constants';
import { createEmpty } from 'CRUD/contacts/create';
import { read } from 'CRUD/contacts/read';
import store from 'Store';

export const getContacts = contacts => {
    return { type: GET_CONTACTS, contacts }
}

export const sortContacts = sort => {
    return { type: SORT_CONTACTS, sort }
}

export const setContact = (contact) => {
    return { type: SET_CONTACT, contact }
}

export const saveContacts = (contact) => {
    return { type: SAVE_CONTACT, contact }
}

export const createEmptyContact = (userUID) => {
    console.log('createEmptyContact:', userUID)
    createEmpty(userUID);
    return { type: CREATE_EMPTY_CONTACT, userUID }
}

export const receiveContact = (contact) => {
    return { type: RECEIVE_CONTACT, contact }
}

export const syncData = (uid) => {
    read(uid,(contactsData) => {
        store.dispatch(getContacts(contactsData))
    },'server');
}