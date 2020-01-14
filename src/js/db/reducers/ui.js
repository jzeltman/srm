import { SORT_CONTACTS, UI_LOADING, RECEIVE_PHOTO } from '../../constants';

let initialState = {
    sort: 'alpha', 
    theme: 'light',
    loading: false
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
        } default: {
            return state;
            break;
        }
    }
};

export default ui;
