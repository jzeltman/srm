import { SET_CONTACT, SAVE_CONTACT } from '../../constants';
import ContactModel from '../../models/contact';

export const setContact = (contact) => {
    if (typeof contact === 'string') contact = { ...ContactModel, user: contact };
    return { type: SET_CONTACT, contact }
}

export const saveContact = (contact) => {
    return { type: SAVE_CONTACT, contact }
}