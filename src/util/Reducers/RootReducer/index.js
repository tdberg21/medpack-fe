import { combineReducers } from "redux";
import { handleUserLoginReducer } from "../userReducer/userReducer";
import { handlePatientsReducer } from "../patientReducer/patientReducer";
import { eventsReducer } from "../eventsReducer/eventsReducer";

export const rootReducer = combineReducers({
  events: eventsReducer,
  user: handleUserLoginReducer,
  patients: handlePatientsReducer
});
