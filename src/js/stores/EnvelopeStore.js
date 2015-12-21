import assign from 'object-assign';
import {EventEmitter} from 'events';
import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

// data storage
let _tasks = [];
let _targetIndex = -1;
let _time=new Date();

// add private functions to modify data
function _addItem(title, completed = false, createTime = (new Date()).toString(), editing = false) {
  _tasks = _tasks.concat({title, completed, createTime, editing});
}
function _clearList() {
  _tasks = [];
  _targetIndex = -1;
  EnvelopeStore.emitChange();
}
function _taskCompleted(task) {
  _tasks[_tasks.indexOf(task)].completed = !_tasks[_tasks.indexOf(task)].completed;
  EnvelopeStore.emitChange();
}
function _editTask(task, title) {
  _tasks[_tasks.indexOf(task)].title = title;
  EnvelopeStore.emitChange();
}
function _toggleTaskState(task) {
  _tasks[_tasks.indexOf(task)].editing = !_tasks[_tasks.indexOf(task)].editing;
  EnvelopeStore.emitChange();
}
function _printTask(task) {
  _targetIndex = _tasks.indexOf(task);
  _time=new Date();
  EnvelopeStore.emitChange();
  //window.print();
}

// Facebook style store creation.
const EnvelopeStore = assign({}, EventEmitter.prototype, {
  // public methods used by Controller-View to operate on data
  getTasks() {
    return _tasks;
  },

  getTargetIndex() {
    return _targetIndex;
  },

  getTime(){
    return _time;
  },

  getAll() {
    return {
      tasks: _tasks,
      targetIndex: _targetIndex,
      clickPrintAt:_time
    };
  },

  addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT.ENVELOPE_STORE, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT.ENVELOPE_STORE, callback);
  },
  // triggers change listener above, firing controller-view callback
  emitChange() {
    this.emit(Constants.CHANGE_EVENT.ENVELOPE_STORE);
  },
  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch (action.type) {
      case Constants.ActionTypes.TASK_ADDED:
        const text = action.text.trim();
        // NOTE: if this action needs to wait on another store:
        // Dispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        if (text !== '') {
          _addItem(text);
          EnvelopeStore.emitChange();
        }
        break;
      case Constants.ActionTypes.CLEAR_LIST:
        _clearList();
        break;
      case Constants.ActionTypes.TASK_EDITED:
        _editTask(action.task, action.newTitle);
        break;
      case Constants.ActionTypes.TASK_COMPLETED:
        _taskCompleted(action.task);
        break;
      case Constants.ActionTypes.TASK_STATE:
        _toggleTaskState(action.task);
        break;
      case Constants.ActionTypes.TASK_PRINT:
        _printTask(action.task);
        break;

      // add more cases for other actionTypes...

      // no default
    }
  })
});

export default EnvelopeStore;
