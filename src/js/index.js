import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from 'Store';
import Main from 'Components/main/main';
import Nav from 'Components/nav/nav';
import Header from 'Components/header/header';

import { resize } from 'Actions/ui';
import debounce from 'Utils/debounce';


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
                <Router>
                    <Header />
                    <Main />
                    <Nav />
                </Router>
            </Provider>, 
            AppEl
        );
    }
});

window.addEventListener('resize',(e) => {
    debounce(store.dispatch(resize({ 
        height: window.outerHeight,
        width: window.outerWidth
    })),50)
})
