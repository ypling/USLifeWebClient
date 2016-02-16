import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import SDK from '../SDK/adminSDK';

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
  getFeatureGroups() {
      console.log("wiki action: getFeatureGroups");
      var featureGroups;
      SDK.getFeatureGroups().then(function(data){
        featureGroups = data;
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.GET_FEATURE_GROUPS,
          featureGroups
        });
      },function(){
          alert('getFeatureGroups error');
      });
    },
};
