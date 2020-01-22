import { db } from 'DB';

export const read = (uid,cb,source = 'cache') => {
    return db.collection("contacts").where("user", "==", uid)
        .get({ source })
        .then((querySnapshot) => {
            let dataArray = [];
            querySnapshot.forEach((doc) => dataArray.push({
                ...doc.data(),
                uid: doc.id
            }));
            if (cb) cb(dataArray);
            return dataArray;
        })
        .catch((e) => console.error("Error getting documents: ", e));
}

export const getContactByUID = (uid,contacts) => {
    if (uid === 'new' || uid === 'import') uid = '';
    if (!contacts) return false;
    else return contacts.filter( contact => uid === contact.uid)[0];
}