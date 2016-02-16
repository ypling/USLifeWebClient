import $ from '../../bower_components/jQuery/dist/jquery.min.js'
import ReactDOM from 'react-dom';
import React from 'react';
import AppContainer from './components/AppContainer.jsx';
import sdk from './SDK/adminSDK';

window.$ = $;
window.sdk = sdk;
ReactDOM.render(<AppContainer/>, document.getElementById('main'));
