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
    savePage(folderPath,page) {
      console.log("wiki action: save page, page:"+ page);
      var path = folderPath + '/'+page.title+'.json';
      var page = api.savePage(path, page);
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.SAVE_PAGE,
        page: page
      });
    },
    cencelEdit() {
      console.log('wiki action: cencel edit');
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.CENCEL_EDIT,
      });
    },
    routing(path) {
      var route = path ? path.split('/') : [];
      var items = api.getItems(route);
      console.log('wiki action: routing');
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.ROUTING,
        route: route,
        items: items
      });
    },
    selectPage(path) {
      console.log('wiki action: select page');
      var page = api.getPage(path);
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.SELECT_PAGE,
        page: page
      })
    },
    createFolder(path) {
      console.log('wiki action: select page');
      api.postItem(path);
      location.hash = 'wiki/' + path;
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.CREATE_FOLDER
      })
    }
};
