import {AnyAction, configureStore} from '@reduxjs/toolkit';
import {createEpicMiddleware} from 'redux-observable';
import rootEpic from './RootEpic';
import rootReducer, {RootState} from './RootReducer';

export const epicMiddleware = createEpicMiddleware<
  AnyAction,
  AnyAction,
  RootState
>();

const middlewares = [epicMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
