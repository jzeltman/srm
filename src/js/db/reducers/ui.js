import { SORT_CONTACTS, UI_LOADING, RECEIVE_PHOTO, UI_SET_LETTER } from 'Constants';

let initialState = {
    sort: 'alpha', 
    theme: 'light',
    loading: false,
    letter: 'A',
    groups: ['friends','family','work','acquaintances'],
    sort_options: ['alpha','group','date']
};

const ui = (state = initialState, action) => {
    switch (action.type) {
        case SORT_CONTACTS: {
            return {
                ...state,
                sort: action.sort
            }
            break;
        } case UI_LOADING: {
            return {
                ...state,
                loading: action.percent
            }
            break;
        } case RECEIVE_PHOTO: {
            return {
                ...state,
                loading: false
            }
            break;
        } case UI_SET_LETTER: {
            return {
                ...state,
                letter: action.letter
            }
            break;
        } default: {
            return state;
            break;
        }
    }
};

export default ui;
