import {AnyAction} from '@reduxjs/toolkit';
import {combineEpics, Epic, StateObservable} from 'redux-observable';
import {catchError, Observable} from 'rxjs';
import {RootState} from './RootReducer';
import {
  getUsersEpic,
  getWordCategoriesEpic,
  signUpUserEpic,
  signInUserEpic,
  signOutUserEpic,
  setUserDetailsEpic,
  getUserEpic,
  setUserPointsEpic,
} from './home/epics/Home.epics';

export type HomeEpic = Epic<AnyAction, AnyAction, RootState>;

const combinedEpics = combineEpics(
  getUsersEpic,
  getUserEpic,
  getWordCategoriesEpic,
  signUpUserEpic,
  signInUserEpic,
  signOutUserEpic,
  setUserDetailsEpic,
  setUserPointsEpic,
);

const rootEpic = (
  action$: Observable<AnyAction>,
  store$: StateObservable<RootState>,
  dependencies: any,
) =>
  combinedEpics(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.log('unhandled epic error', error);
      return source;
    }),
  );

export default rootEpic;
