export const addEvents = events => ({
  type: "ADD_EVENTS",
  events
});

export const updateEvent = (id, updatedEvent) => ({
  type: "UPDATE_EVENT",
  id,
  updatedEvent
});
