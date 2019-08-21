import { combineReducers } from 'redux';
import { handleUserLoginReducer } from '../userReducer/userReducer';

export const rootReducer = combineReducers({
  user: handleUserLoginReducer,
});
