import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

/* eslint-disable no-console */

export default {
  addItem(text) {

    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_ADDED,
      text: text
    });
  },

  clearList() {

    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.CLEAR_LIST
    });
  },

  completeTask(task) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_COMPLETED,
      task: task
    });
  },

  editTask(task, text){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_EDITED,
      task: task,
      newTitle: text
    });
  },

  taskState(task){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_STATE,
      task:task
    })
  },
  printTask(task){
    Dispatcher.handleViewAction({
      type:Constants.ActionTypes.TASK_PRINT,
      task:task
    });
  }

};
