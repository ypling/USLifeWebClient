import React from 'react';
import UserStore from '../../stores/UserStore.js';
import User from './User.jsx';
export default React.createClass({
  _getStoreState() {
    //call store getters.
    var showLogin = UserStore.getShowLogin();
    //return state object.
    return {
      showLogin
    }
  },
  _onChange() {
    this.setState(this._getStoreState());
  },
  getInitialState() {
    return this._getStoreState();
  },
  componentDidMount() {
    UserStore.addChangeListener(this._onChange);
  },
  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  },
  //other react life cycles
  render() {
    return (
      <div id="user">
        <User showLogin={this.state.showLogin}/>
      </div>
    );
  }
});
