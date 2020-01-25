import { db } from 'DB';

export const update = (doc,cb) => {
    db.collection("contacts")
        .doc(doc.uid)
        .set(doc, { merge: true }) 
        .then(function(foo) {
            if (cb) cb(foo);
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
};