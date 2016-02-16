import React from 'react';
import {Modal, Button, Input} from 'react-bootstrap';
import Actions from '../../actions/UserActions';
export default React.createClass({
  onHideHandler(){
    Actions.closeLogin();
  },
  loginClickHandler(){
    var username;
    var password;
    Actions.login(username,password);
  },
  signUpClickHandler(){
    Actions.closeLogin();
  },
  //react life cycles
  render() {
    return (
      <Modal className="text-center"  bsSize="small" show={this.props.show} onHide={this.onHideHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Log in to LMB</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="loginForm">
            <p className="logo">LOGO</p>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>
            <Button bsStyle="primary" block onClick={this.loginClickHandler}>Log in</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <p className="text-center">Don't have an account?
            <a href="#/user" onClick={this.signUpClickHandler}>Sign up »</a></p>
        </Modal.Footer>
      </Modal>
    );
  }
});
