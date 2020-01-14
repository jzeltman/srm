import { SET_USER } from '../../constants';

const user = (state = {}, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                ...action.user
            }
        } default: {
            return state;
        }
    }
};

export default user;
