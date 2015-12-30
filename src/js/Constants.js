export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENTS: {
    ENVELOPE_STORE:"ENVELOPE_STORE",
    WIKI_STORE:"WIKI_STORE"
  },

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: {
    EDIT_PAGE:'EDIT_PAGE',
    SAVE_PAGE:'SAVE_PAGE',
    CANCEL_EDIT:'CANCEL_EDIT',
    ROUTING:'ROUTING',
    SELECT_ITEM:'SELECT_ITEM',
    CREATE_FOLDER:'CREATE_FOLDER',
    CREATE_PAGE:'CREATE_PAGE'
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
  EDITOR_MIN_HEIGHT:400
};
