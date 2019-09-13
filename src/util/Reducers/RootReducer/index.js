import { combineReducers } from 'redux';
import { handleUserLoginReducer } from '../userReducer/userReducer';
import { handlePatientsReducer } from '../patientReducer/patientReducer';

export const rootReducer = combineReducers({
  user: handleUserLoginReducer,
  patients: handlePatientsReducer,
});
