import { UI_LOADING } from '../../constants';

export const loading = percent => {
    return { type: UI_LOADING, percent }
};