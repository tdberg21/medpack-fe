export const handlePatientsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PATIENTS":
      return action.patients;
    case "LOGOUT":
      return [];
    default:
      return state;
  }
};
