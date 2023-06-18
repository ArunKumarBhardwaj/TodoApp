import {combineReducers} from '@reduxjs/toolkit';
import todoReducer from './todoReducer';

// USING COMBINE REDUCER SO THAT WE CAN ADD MULTIPLE REDUCER LIKE PROFILE REDUCER OR HOME REDUCER.

export const rootReducer = combineReducers({
  todos: todoReducer,
});
