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
    CENCEL_EDIT:'CENCEL_EDIT',
    ROUTING:'ROUTING'
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
  EDITOR_MIN_HEIGHT:400
};
