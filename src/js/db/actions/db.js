import { RECEIVE_PHOTO } from 'Constants';

export const receivePhoto = (photo,contact) => {
    return { type: RECEIVE_PHOTO, photo, contact }
}