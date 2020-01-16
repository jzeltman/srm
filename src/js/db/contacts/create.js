import { db } from 'DB';

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