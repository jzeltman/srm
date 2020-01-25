import { 
    GET_CONTACTS, 
    SET_CONTACT,
    SORT_CONTACTS, 
    SAVE_CONTACT, 
    RECEIVE_CONTACT,
    CREATE_EMPTY_CONTACT,
    UPDATE_CONTACT
} from 'Constants';
import { createEmpty } from 'CRUD/contacts/create';
import { read } from 'CRUD/contacts/read';
import { update } from 'CRUD/contacts/update';
import store from 'Store';

export const getContacts = contacts => ({ type: GET_CONTACTS, contacts })
export const sortContacts = sort => ({ type: SORT_CONTACTS, sort })
export const setContact = (contact) => ({ type: SET_CONTACT, contact })
export const saveContacts = (contact) => ({ type: SAVE_CONTACT, contact })
export const receiveContact = (contact) => ({ type: RECEIVE_CONTACT, contact })
export const updateContacted = (contact,date) => ({ type: UPDATE_CONTACT, contact, date })

export const createEmptyContact = (userUID) => {
    console.log('createEmptyContact:', userUID)
    createEmpty(userUID);
    return { type: CREATE_EMPTY_CONTACT, userUID }
}


export const syncData = (uid) => {
    read(uid,(contactsData) => {
        store.dispatch(getContacts(contactsData))
    },'server');
}

export const contactedToday = (contact) => {
    console.log('contact:', contact)
    return (dispatch,getState) => {
        dispatch(updateContacted(contact,new Date().toISOString()));
        contact = getState().contacts.filter(c => c.uid === contact.uid)[0];
        console.log('contact:', contact)
        return update(contact,(foo) => dispatch(receiveContact(foo)));
    }
};