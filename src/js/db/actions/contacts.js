import { 
    GET_CONTACTS, 
    SORT_CONTACTS, 
    SAVE_CONTACT, 
    RECEIVE_CONTACT,
    CREATE_EMPTY_CONTACT 
} from 'Constants';
import { createEmpty } from 'CRUD/contacts/create';

export const getContacts = contacts => {
    return { type: GET_CONTACTS, contacts }
}

export const sortContacts = sort => {
    return { type: SORT_CONTACTS, sort }
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