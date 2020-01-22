import firebase from 'firebase';
import { SET_USER, SIGN_OUT_USER } from 'Constants';

export const setUser = (user,token) => {
    return { type: SET_USER, user, token }
}

export const signOut = () => {
    return { type: SIGN_OUT_USER }
}

export const signIn = () => {
    firebase.auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            const provider = new firebase.auth.FacebookAuthProvider();
            // provider.addScope('email,user_birthday,user_friends,user_gender,user_hometown,user_likes,user_link,user_location,user_photos');
            // provider.addScope();

            return firebase.auth().signInWithPopup(provider);
        });
}
