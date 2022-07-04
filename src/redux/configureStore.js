import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchRobots from './searchReducer';
import requestRobotsReducer from './requestReducer';

const rootReducer = combineReducers({
  searchRobots,
  requestRobotsReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
