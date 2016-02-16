import {EventEmitter} from 'events';
import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

// data storage

// add private functions to modify data

// Facebook style store creation.
const HomeStore = Object.assign({}, EventEmitter.prototype, {
  // public methods used by Controller-View to operate on data
  addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENTS.WIKI_STORE, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENTS.WIKI_STORE, callback);
  },
  // triggers change listener above, firing controller-view callback
  emitChange() {
    this.emit(Constants.CHANGE_EVENTS.WIKI_STORE);
  },
  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch (action.type) {

    }
  })
});

export default HomeStore;
