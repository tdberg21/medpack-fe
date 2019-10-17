export const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EVENTS":
      const newState = [...state, ...action.events];
      return newState;
    case "UPDATE_EVENT":
      const targetedEventIndex = state.findIndex(
        event => event.id === action.id
      );
      const stateCopy = [...state];
      stateCopy[targetedEventIndex] = action.updatedEvent;
      return stateCopy;
    default:
      return state;
  }
};
