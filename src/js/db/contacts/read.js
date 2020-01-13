import { db } from '../db';

export const read = (uid,cb) => {
    return db.collection("contacts").where("user", "==", uid)
        .get()
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