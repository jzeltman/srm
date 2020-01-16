import { UI_LOADING, UI_SET_LETTER } from 'Constants';

export const loading = percent => {
    return { type: UI_LOADING, percent }
};

export const setLetter = letter => {
    return { type: UI_SET_LETTER, letter }
};