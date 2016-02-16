import assign from 'object-assign';
import {
  EventEmitter
}
from 'events';
import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
// data storage
var _user;
var _showLogin;
var _currentView;
// add private functions to modify data
function _openLogin(){
  _showLogin = true;
  UserStore.emitChange();
}

function _closeLogin(){
  _showLogin = false;
  UserStore.emitChange();
}

// Facebook style store creation.
const UserStore = assign({}, EventEmitter.prototype, {
  //getter functions
  getShowLogin() {
      return _showLogin;
    },
    // public methods used by Controller-View to operate on data
    addChangeListener(callback) {
      this.on(Constants.CHANGE_EVENTS.USER_STORE, callback);
    },
    removeChangeListener(callback) {
      this.removeListener(Constants.CHANGE_EVENTS.USER_STORE, callback);
    },
    // triggers change listener above, firing controller-view callback
    emitChange() {
      this.emit(Constants.CHANGE_EVENTS.USER_STORE);
    },
    dispatcherIndex: Dispatcher.register(function handleAction(payload) {
      const action = payload.action;
      switch (action.type) {
        case Constants.ActionTypes.OPEN_LOGIN:
          _openLogin();
          break;
        case Constants.ActionTypes.CLOSE_LOGIN:
          _closeLogin();
          break;
      }
    })
});
export default UserStore;
