import {createSlice} from '@reduxjs/toolkit';
import {HomeState} from '../../../types/home-store.types';
import {sortBy as _sortBy} from 'lodash';

const INITIAL_STATE: HomeState = {
  wordCategories: undefined,
  authUser: undefined,
  users: undefined,
  error: undefined,
};

const homeSlice = createSlice({
  name: 'home',
  initialState: INITIAL_STATE,
  reducers: {
    hasError: (state, action) => {
      state.error = action.payload;
    },
    getUsersSuccess: (state, action) => {
      if (action.payload) {
        const sortedUsersByPoints = _sortBy(action.payload, 'points').reverse();
        state.users = sortedUsersByPoints;
      }
    },
    getUserSuccess: (state, action) => {
      if (action.payload) {
        state.authUser = action.payload;
      }
    },
    getWordCategoriesSuccess: (state, action) => {
      if (action.payload) {
        state.wordCategories = action.payload;
      }
    },
    signUpAuthUserSuccess: (state, action) => {
      state.authUser = action.payload;
    },
    signInAuthUserSuccess: (state, action) => {
      state.authUser = action.payload;
    },
    signOutAuthUserSuccess: state => {
      state.authUser = undefined;
    },
    setUserDetailsSuccess: () => {},
    setUserPointsSuccess: () => {},
  },
});

export const HomeReducer = homeSlice.reducer;
export const HomeActions = homeSlice.actions;
