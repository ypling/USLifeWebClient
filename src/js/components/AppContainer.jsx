import React from 'react';
import App from './App.jsx';
import WikiController from './wiki/WikiController.jsx';
import { Router, Route, Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <Router>
        <Route path="/wiki(/**)" component={WikiController}/>
        <Route path="/" component={App}/>
      </Router>
    );
  }
});
