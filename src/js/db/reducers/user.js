import { SET_USER, SIGN_OUT_USER } from 'Constants';

const user = (state = {}, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                ...action.user
            };
            break;
        } case SIGN_OUT_USER: {
            return {};
            break;
        } default: {
            return state;
        }
    }
};

export default user;
