import {
  EventEmitter
}
from 'events';
import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
// data storage
var _featureGroups;
// add private functions to modify data
function _getFeatureGroups(featureGroups) {
  _featureGroups = featureGroups;
  SDKStore.emitChange();
}
// Facebook style store creation.
const SDKStore = Object.assign({}, EventEmitter.prototype, {
  // public methods used by Controller-View to operate on data
  addChangeListener(callback) {
      this.on(Constants.CHANGE_EVENTS.SDK_STORE, callback);
    },
    removeChangeListener(callback) {
      this.removeListener(Constants.CHANGE_EVENTS.SDK_STORE, callback);
    },
    // triggers change listener above, firing controller-view callback
    getFeatureGroups() {
      return _featureGroups;
    },
    emitChange() {
      this.emit(Constants.CHANGE_EVENTS.SDK_STORE);
    },
    dispatcherIndex: Dispatcher.register(function handleAction(payload) {
      const action = payload.action;
      switch (action.type) {
        case Constants.ActionTypes.GET_FEATURE_GROUPS:
          _getFeatureGroups(action.featureGroups);
          break;
      }
    })
});
export default SDKStore;
