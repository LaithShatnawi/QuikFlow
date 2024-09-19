import { combineReducers } from 'redux';
import customizationReducer from './customization/customizationSlice';
import authReducer from './authentication/authReducer';

const rootReducer = combineReducers({
  customization: customizationReducer,
  auth: authReducer
});

export default rootReducer;
