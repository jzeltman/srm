import { db } from 'DB';

export const update = (doc) => {
    db.collection("contacts")
        .doc(doc.uid)
        .set(doc, { merge: true }) 
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
};