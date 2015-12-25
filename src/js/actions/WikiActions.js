import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import api from '../API/mock/wikiAPI';

/* eslint-disable no-console */

export default {
  //Action describe a user's action, are not setters. (e.g. select-page not set-page-id).
  // selectPage(pageId) {
  //   Dispatcher.handleViewAction({
  //     type: Constants.ActionTypes.SELECT_PAGE,
  //     id: pageId
  //   });
  // },

  //Actions
  editPage() {
      console.log("wiki action: edit page")
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.EDIT_PAGE
      });
    },
    savePage(content) {
      console.log("wiki action: save page, content: " + content)
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.SAVE_PAGE,
        content: content
      });
    },
    cencelEdit() {
      console.log('wiki action: cencel edit');
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.CENCEL_EDIT,
      });
    },
    routing(path) {
      var route = path?path.split('/'):[];
      var items = api.getItems(route);
      console.log('wiki action: routing');
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.ROUTING,
        route:route,
        items:items
      });
    }
};
