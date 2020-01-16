import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'Store';
import UI from 'UI/_ui';

// import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

window.addEventListener('DOMContentLoaded', (event) => {
    let AppEl = document.getElementById('App');
    if (AppEl) {
        ReactDOM.render(
            <Provider store={store}>
                <UI />
            </Provider>, 
            AppEl
        );
    }
});
