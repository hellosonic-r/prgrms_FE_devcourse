import { combineReducers } from '@reduxjs/toolkit';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
});

export default rootReducer;
