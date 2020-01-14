import { RECEIVE_PHOTO } from '../../constants';

export const receivePhoto = (photo,contact) => {
    return { type: RECEIVE_PHOTO, photo, contact }
}