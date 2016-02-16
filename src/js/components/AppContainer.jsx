import React from 'react';
import App from './App.jsx';
import WikiController from './wiki/WikiController.jsx';
import SDKController from './sdk/SDKController.jsx';
import HomeController from './home/HomeController.jsx';
import UserController from './user/UserController.jsx';
import { Router, Route, Link} from 'react-router';

export default React.createClass({
  render() {
    return (
        <Router>
          <Route path="/wiki(/**)" component={WikiController}/>
          <Route path="/sdk" component={SDKController}/>
          <Route path="/home" component={HomeController}/>
          <Route path="/user(/**)" component={UserController} />
          <Route path="/" component={App}/>
        </Router>
    );
  }
});
