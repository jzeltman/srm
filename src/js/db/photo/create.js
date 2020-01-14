import firebase from 'firebase';
import store from '../store';
import { loading } from '../actions/ui';
import { receivePhoto } from '../actions/db';
import { saveContact } from '../actions/contact';

export const create = (file,contact) => {

    const storageRef = firebase.storage().ref();
    // Create the file metadata
    const metadata = {
        contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED, 
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            store.dispatch(loading(progress));

            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                // or 'paused'
                case firebase.storage.TaskState.PAUSED: {
                    console.log('Upload is paused');
                    break;
                    
                // or 'running'
                } case firebase.storage.TaskState.RUNNING: {
                    console.log('Upload is running');
                    break;
                }
            }
        }, 
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                // User doesn't have permission to access the object
                case 'storage/unauthorized': { break; }
                // User canceled the upload
                case 'storage/canceled': { break; }
                // Unknown error occurred, inspect error.serverResponse
                case 'storage/unknown': { break; }
            }
        }, 
        () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((photoURL) => {
            store.dispatch(receivePhoto(photoURL,contact));
            store.dispatch(saveContact({ ...contact, PHOTO: photoURL }));
        });
    });
}