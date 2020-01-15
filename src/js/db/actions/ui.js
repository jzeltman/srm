import { UI_LOADING } from 'Constants';

export const loading = percent => {
    return { type: UI_LOADING, percent }
};