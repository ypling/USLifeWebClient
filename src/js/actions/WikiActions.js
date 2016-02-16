import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import api from '../API/mock/wikiAPI';
import SDK from '../SDK/wikiSDK';
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
    savePage(folderPath, oldTitle, page) {
      console.log("wiki action: save page, page:" + page);
      var oldPath = (oldTitle) ? (folderPath + oldTitle + '.json') : undefined;
      var newPath = folderPath + page.title + '.json';
      SDK.savePage(oldPath, newPath, page).then(() => {
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.SAVE_PAGE,
          page
        });
      });
    },
    deletePage(path, title) {
      console.log('wiki action: delete page');
      var s3Key = path + title + '.json';
      SDK.deletePage(s3Key).then(() => {
        location.hash = 'wiki/' + path;
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.DELETE_PAGE
        });
      });
    },
    cancelEdit() {
      console.log('wiki action: cencel edit');
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.CANCEL_EDIT,
      });
    },
    routing(path) {
      console.log('wiki action: routing');
      var route = path ? path.split('/') : [];
      SDK.getItems(path).then(function(items) {
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.ROUTING,
          route,
          items
        });
      });
    },
    selectItem(item) {
      if (item.type === Constants.WikiItemType.FOLDER) {
        console.log('wiki action: select item, folder');
        location.hash = 'wiki/' + item.path;
      } else {
        console.log('wiki action: select item, page');
        SDK.getPage(item.path).then(page => {
          Dispatcher.handleViewAction({
            type: Constants.ActionTypes.SELECT_PAGE,
            page
          });
        });
      }
    },
    createFolder(path) {
      console.log('wiki action: create folder');
      location.hash = 'wiki/' + path+'/';
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.CREATE_FOLDER
      })
    },
    createPage() {
      console.log('wiki action: create page');
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.CREATE_PAGE
      });
    },
    uploadImage(file) {
      console.log('wiki action: upload image');
      SDK.uploadImage(file).then((url) => {
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.UPLOAD_IMAGE,
          url
        });
      });
    }
};
