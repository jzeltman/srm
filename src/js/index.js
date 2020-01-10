import React from 'react';
import ReactDOM from 'react-dom';
import UI from './ui/_ui';
// import * as serviceWorker from './serviceWorker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


window.addEventListener('DOMContentLoaded', (event) => {
    ReactDOM.render(<UI />, document.querySelector('main'));
});
