import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/feathericon.min.css';
import './assets/plugins/morris/morris.css';
import './assets/css/style.css';
import './assets/astro/css/style.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
