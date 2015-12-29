import assign from 'object-assign';
import {
  EventEmitter
}
from 'events';
import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

// data storage
var _currentPage = {title:"pagedefault",content:"<p>Empty page</p>"};
var _currentView = Constants.WikiViews.CONTENT;
var _folderItems;
var _route = [];
// add private functions to modify data
function _editPage() {
  _currentView = Constants.WikiViews.EDITOR;
  WikiStore.emitChange();
}

function _savePage(page) {
  _currentPage = page;
  _currentView = Constants.WikiViews.CONTENT;
  WikiStore.emitChange();
}

function _cencelEdit() {
  _currentView = Constants.WikiViews.CONTENT;
  WikiStore.emitChange();
}

function _routing(route, items) {
  _currentView = Constants.WikiViews.FOLDER;
  _route = route;
  _folderItems = items;
  WikiStore.emitChange();
}

function _selectPage(page){
  _currentView = Constants.WikiViews.CONTENT;
  _currentPage = page;
  WikiStore.emitChange();
}

function _createFolder(){
  WikiStore.emitChange();
}
// Facebook style store creation.
const WikiStore = assign({}, EventEmitter.prototype, {
  // public methods used by Controller-View to operate on data
  getCurrentPage() {
      return _currentPage;
    },

    getCurrentView() {
      return _currentView;
    },

    getFolderItems() {
      return _folderItems;
    },

    getRoute() {
      return _route;
    },

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
        case Constants.ActionTypes.EDIT_PAGE:
          _editPage();
          break;
        case Constants.ActionTypes.SAVE_PAGE:
          _savePage(action.page);
          break;
        case Constants.ActionTypes.CENCEL_EDIT:
          _cencelEdit();
          break;
        case Constants.ActionTypes.ROUTING:
          _routing(action.route, action.items);
          break;
        case Constants.ActionTypes.SELECT_PAGE:
          _selectPage(action.page);
          break;
        case Constants.ActionTypes.CREATE_FOLDER:
          _createFolder();
          break;
      }
    })
});

export default WikiStore;
