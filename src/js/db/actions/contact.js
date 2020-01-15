import { SET_CONTACT, SAVE_CONTACT, SAVE_PHOTO } from 'Constants';
import ContactModel from 'Models/contact';

export const setContact = (contact) => {
    if (typeof contact === 'string') contact = { ...ContactModel, user: contact };
    return { type: SET_CONTACT, contact }
}

export const saveContact = (contact) => {
    return { type: SAVE_CONTACT, contact }
}

export const savePhoto = (photo) => {
    return { type: SAVE_PHOTO, photo }
}