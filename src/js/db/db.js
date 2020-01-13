import firebase from 'firebase';
import config from '../../../firebase.config';

// import { create as userCreate } from './users/create';
// import { read as userRead } from './users/read';
// import { update as userUpdate } from './users/update';
// import { delete as userDelete } from './users/delete';

import { create as contactCreate } from './contacts/create';
import { read as contactRead } from './contacts/read';
import { update as contactUpdate } from './contacts/update';
import { destroy as contactDestroy } from './contacts/delete';

firebase.initializeApp(config);
export const db = firebase.firestore();

const DB = () => {
    let userDataFetched = false;
}

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