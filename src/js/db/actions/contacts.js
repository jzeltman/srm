import { GET_CONTACTS, SORT_CONTACTS, SAVE_CONTACT } from 'Constants';

export const getContacts = contacts => {
    return { type: GET_CONTACTS, contacts }
}

export const sortContacts = sort => {
    return { type: SORT_CONTACTS, sort }
}

export const saveContacts = (contact) => {
    return { type: SAVE_CONTACT, contact }
}