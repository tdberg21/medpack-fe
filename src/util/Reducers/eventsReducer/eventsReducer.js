export const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EVENTS":
      const newState = [...state, action.events]
      return newState;
    default:
      return state;
  }
};
