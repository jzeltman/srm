import { SET_USER, SIGN_OUT_USER } from '../../constants';

export const setUser = user => {
    return { type: SET_USER, user }
}

export const signOut = () => {
    return { type: SIGN_OUT_USER }
}
