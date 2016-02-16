import React from 'react';
import Cover from './Cover.jsx';
import Navigation from '../Common/Navigation.jsx';
import LoginModal from '../Common/LoginModal.jsx';
export default React.createClass({
  //react life cycles
  render() {
    return (
      <div className="container-fluid">
        <Navigation title="Home" titleHref="/home"/>
        <Cover/>
        <LoginModal/>
      </div>
    );
  }
});
