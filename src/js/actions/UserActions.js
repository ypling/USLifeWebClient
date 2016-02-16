import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

/* eslint-disable no-console */

export default {
  //Action describe a user's action, are not setters. (e.g. select-page not set-page-id).
  // selectPage(pageId) {
  //   Dispatcher.handleViewAction({
  //     type: Constants.ActionTypes.SELECT_PAGE,
  //     id: pageId
  //   });
  // },
    openLogin(){
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.OPEN_LOGIN
      })
    },
    closeLogin(){
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.CLOSE_LOGIN
      })
    }
  //Actions
};
