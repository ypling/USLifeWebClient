export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENTS: {
    ENVELOPE_STORE:"ENVELOPE_STORE",
    WIKI_STORE:"WIKI_STORE",
    SDK_STORE:"SDK_STORE",
    HOME_STORE:"HOME_STORE",
    USER_STORE:"USER_STORE"
  },

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: {
    //wiki
    EDIT_PAGE:'EDIT_PAGE',
    SAVE_PAGE:'SAVE_PAGE',
    CANCEL_EDIT:'CANCEL_EDIT',
    ROUTING:'ROUTING',
    SELECT_ITEM:'SELECT_ITEM',
    CREATE_FOLDER:'CREATE_FOLDER',
    CREATE_PAGE:'CREATE_PAGE',
    GET_FEATURE_GROUPS:'GET_FEATURE_GROUPS',
    UPLOAD_IMAGE:'UPLOAD_IMAGE',
    DELETE_PAGE:'DELETE_PAGE',
    //user
    OPEN_LOGIN:'OPEN_LOGIN',
    CLOSE_LOGIN:'CLOSE_LOGIN'
  },

  ActionSources: {
    SERVER_ACTION:"SERVER_ACTION",
    VIEW_ACTION: "VIEW_ACTION"
  },

  WikiViews: {
    EDITOR:'EDITOR',
    CONTENT:'CONTENT',
    FOLDER:'FOLDER'
  },
  WikiItemType:{
    FOLDER:'FOLDER',
    FILE:'FILE'
  },
  UserViews:{
    LOGIN:'LOGIN'
  },
  EDITOR_MIN_HEIGHT:400
};
