import { SORT_CONTACTS, UI_LOADING, RECEIVE_PHOTO, UI_RESIZE } from 'Constants';

const getDeviceClass = () => {
    let width = window.innerWidth;
    if (width < 700) return 'mobile';
    if (width < 1000) return 'tablet';
    if (width > 1000) return 'desktop';
}

let initialState = {
    sort: 'alpha', 
    theme: 'light',
    loading: false,
    dimensions: {
        height: window.innerHeight,
        width: window.innerWidth
    },
    orientation: window.innerHeight > window.innerWidth ? 'portrait' : 'landscape',
    deviceClass: getDeviceClass()
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
        } case UI_RESIZE: {
            return {
                ...state,
                dimensions: {
                    height: window.innerHeight,
                    width: window.innerWidth
                },
                orientation: window.innerHeight > window.innerWidth ? 'portrait' : 'landscape',
                deviceClass: getDeviceClass()
            }
            break;
        } default: {
            return state;
            break;
        }
    }
};

export default ui;
