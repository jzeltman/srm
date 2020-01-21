import firebase from 'firebase';
import config from '../../../firebase.config';

import store from 'Store';
import { setUser } from 'Actions/user';


// import { create as userCreate } from './users/create';
// import { read as userRead } from './users/read';
// import { update as userUpdate } from './users/update';
// import { delete as userDelete } from './users/delete';
import { create as photoCreate } from './photo/create';

import { create as contactCreate, createEmpty } from './contacts/create';
import { read as contactRead, getContactByUID } from './contacts/read';
import { update as contactUpdate } from './contacts/update';
import { destroy as contactDestroy } from './contacts/delete';

import { getContacts } from 'Actions/contacts';

let userDataFetched = false;

firebase.initializeApp(config);

export const db = firebase.firestore();

db.settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});
  
db.enablePersistence();
// db.disableNetwork();

firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
        store.dispatch(setUser(firebaseUser));
        if (!userDataFetched) {
            userDataFetched = true;
            contactRead(firebaseUser.uid,(contactsData) => {
                store.dispatch(getContacts(contactsData))
            });
        }
    } else store.dispatch(setUser(null));
});

export const contacts = {
    create: contactCreate,
    read: contactRead,
    update: contactUpdate,
    destroy: contactDestroy,
    getContact: getContactByUID
};

export const photos = {
    create: photoCreate
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