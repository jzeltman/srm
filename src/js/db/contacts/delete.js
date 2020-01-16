import { db } from 'DB';

export const destroy = (doc) => {
    db.collection("contacts")
        .doc(doc.uid)
        .delete()
        .then(function() {
            console.log("Document successfully deleted!");
        })
        .catch(function(error) {
            console.error("Error deleting document: ", error);
        });
};