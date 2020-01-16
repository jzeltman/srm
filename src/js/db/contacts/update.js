import { yesterday } from 'Utils/timeToContact';
import { db } from 'DB';

export const update = (doc) => {
    if (typeof doc.updates === 'string') {
        doc.updates = [
            { 
                update: doc.updates,
                date: yesterday.toLocaleDateString()
            }
        ]
    }
    if (typeof doc.actions === 'string') {
        doc.actions = [
            { 
                actions: doc.actions,
                date: yesterday.toLocaleDateString()
            }
        ]
    }
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