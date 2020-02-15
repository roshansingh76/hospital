import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const isPrivilage='frontend';

if(isPrivilage=='admin'){
    require('./assets/css/bootstrap.min.css');
    require('./assets/css/font-awesome.min.css');
    require('./assets/css/feathericon.min.css');
    require('./assets/plugins/morris/morris.css');
    require('./assets/css/style.css');
  }else{
    require('./assets/css/bootstrap.min.css');
    require('./assets/astro/css/style.css');

}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
