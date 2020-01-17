import { UI_LOADING, UI_RESIZE } from 'Constants';

export const loading = percent => {
    return { type: UI_LOADING, percent }
};

export const resize = dimensions => {
    return { type: UI_RESIZE, dimensions }
};