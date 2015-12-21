export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENTS: {
    ENVELOPE_STORE:"ENVELOPE_STORE"
  },
  PRINT_EVENT:'print',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: {
    TASK_ADDED:"TASK_ADDED",
    CLEAR_LIST:"CLEAR_LIST",
    TASK_EDITED:"TASK_EDITED",
    TASK_COMPLETED:"TASK_COMPLETED",
    TASK_STATE:"TASK_STATE",
    TASK_PRINT:"TASK_PRINT"
  },

  ActionSources: {
    SERVER_ACTION:"SERVER_ACTION",
    VIEW_ACTION: "VIEW_ACTION"
  }
};
