import { db } from 'DB';
import ContactModel from 'Models/contact';
import store from 'Store';
import { receiveContact } from 'Actions/contacts';

export const create = (contact) => {
    db.collection("contacts")
        .add(contact)
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
};

export const createEmpty = (userUID) => {
    db.collection("contacts")
        .add({ ...ContactModel, user: userUID })
        .then(docRef => store.dispatch(receiveContact(docRef)))
        .catch(error => console.error('Error Adding Document',error));
}