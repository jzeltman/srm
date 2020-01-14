import { GET_CONTACTS, SORT_CONTACTS, SAVE_CONTACT } from '../../constants';

const ui = (state = { sort: 'alpha' }, action) => {
    switch (action.type) {
        case SORT_CONTACTS: {
            return {
                ...state,
                sort: action.sort
            }
            break;
        } default: {
            return state;
        }
    }
};

export default ui;
