import {combineReducers} from '@reduxjs/toolkit';
import {HomeReducer} from './home/reducers/Home.reducer';

const rootReducer = combineReducers({
  home: HomeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
