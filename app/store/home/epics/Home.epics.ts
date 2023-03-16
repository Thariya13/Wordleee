import {
  signInAuthUser,
  signOutAuthUser,
  signUpAuthUser,
} from '../../../services/AuthService';
import {fetchWordCategories} from '../../../services/WordCategoryService';
import {filter, from, of, mergeMap} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HomeActions} from '../reducers/Home.reducer';
import {
  getUser,
  getUsers,
  getWordCategories,
  setUserDetails,
  setUserPoints,
  signInUser,
  signOutUser,
  signUpUser,
} from '../actions/Home.action';
import {HomeEpic} from '../../RootEpic';
import {
  fetchUser,
  fetchUsers,
  updateUserDetails,
  updateUserPoints,
} from '../../../services/UserService';

export const getUsersEpic: HomeEpic = action$ =>
  action$.pipe(
    filter(getUsers.match),
    switchMap(() =>
      from(fetchUsers()).pipe(
        map(response => HomeActions.getUsersSuccess(response)),
        catchError(error => of(HomeActions.hasError(error))),
      ),
    ),
  );

export const getUserEpic: HomeEpic = action$ =>
  action$.pipe(
    filter(getUser.match),
    switchMap(action =>
      from(fetchUser(action.payload.email)).pipe(
        map(response => HomeActions.getUserSuccess(response)),
        catchError(error => of(HomeActions.hasError(error))),
      ),
    ),
  );

export const getWordCategoriesEpic: HomeEpic = action$ =>
  action$.pipe(
    filter(getWordCategories.match),
    switchMap(() =>
      from(fetchWordCategories()).pipe(
        map(response => HomeActions.getWordCategoriesSuccess(response)),
        catchError(error => of(HomeActions.hasError(error))),
      ),
    ),
  );

// register
export const signUpUserEpic: HomeEpic = action$ =>
  action$.pipe(
    filter(signUpUser.match),
    switchMap(action =>
      from(signUpAuthUser(action.payload)).pipe(
        mergeMap(result =>
          of(
            HomeActions.signUpAuthUserSuccess(result),
            setUserDetails(action.payload),
          ),
        ),
        catchError(error => of(HomeActions.hasError(error))),
      ),
    ),
  );

export const signInUserEpic: HomeEpic = action$ =>
  action$.pipe(
    filter(signInUser.match),
    switchMap(action =>
      from(signInAuthUser(action.payload)).pipe(
        mergeMap(result =>
          of(
            HomeActions.signInAuthUserSuccess(result),
            getUser({email: action.payload.email}),
          ),
        ),
        catchError(error => of(HomeActions.hasError(error))),
      ),
    ),
  );

export const signOutUserEpic: HomeEpic = action$ =>
  action$.pipe(
    filter(signOutUser.match),
    switchMap(() =>
      from(signOutAuthUser()).pipe(
        map(() => HomeActions.signOutAuthUserSuccess()),
        catchError(error => of(HomeActions.hasError(error))),
      ),
    ),
  );

export const setUserDetailsEpic: HomeEpic = action$ =>
  action$.pipe(
    filter(setUserDetails.match),
    switchMap(action =>
      from(updateUserDetails(action.payload)).pipe(
        mergeMap(() =>
          of(
            HomeActions.setUserDetailsSuccess(),
            getUser({email: action.payload.email}),
          ),
        ),
        catchError(error => of(HomeActions.hasError(error))),
      ),
    ),
  );

export const setUserPointsEpic: HomeEpic = action$ =>
  action$.pipe(
    filter(setUserPoints.match),
    switchMap(action =>
      from(updateUserPoints(action.payload.email, action.payload.points)).pipe(
        mergeMap(() =>
          of(
            HomeActions.setUserPointsSuccess(),
            getUser({email: action.payload.email}),
          ),
        ),
        catchError(error => of(HomeActions.hasError(error))),
      ),
    ),
  );
