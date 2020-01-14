import firebase from 'firebase';
import config from '../../../firebase.config';

import store from './store';
import { setUser } from './actions/user';


// import { create as userCreate } from './users/create';
// import { read as userRead } from './users/read';
// import { update as userUpdate } from './users/update';
// import { delete as userDelete } from './users/delete';

import { create as contactCreate } from './contacts/create';
import { read as contactRead } from './contacts/read';
import { update as contactUpdate } from './contacts/update';
import { destroy as contactDestroy } from './contacts/delete';

import { getContacts } from './actions/contacts';

let userDataFetched = false;

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
        store.dispatch(setUser(firebaseUser));
        if (!userDataFetched) {
            contactRead(firebaseUser.uid,(contactsData) => {
                store.dispatch(getContacts(contactsData))
            });
        }
    } else store.dispatch(setUser(null));
});

export const db = firebase.firestore();

export const contacts = {
    create: contactCreate,
    read: contactRead,
    update: contactUpdate,
    destroy: contactDestroy
}


export default {
    db,
    contacts,
    // users: {
    //     create: userCreate,
    //     read: userCreate,
    //     update: userCreate,
    //     delete: userCreate
    // },
}