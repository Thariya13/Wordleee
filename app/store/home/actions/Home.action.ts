import {createAction} from '@reduxjs/toolkit';
import {HomeActionTypes} from '../types/Home.type';
import {SignInRequest, SignUpRequest} from '../../../types/wordleee.types';

export const getUsers = createAction(HomeActionTypes.GET_USERS);
export const getUser = createAction<{email: string}>(HomeActionTypes.GET_USER);
export const getWordCategories = createAction(
  HomeActionTypes.GET_WORD_CATEGORIES,
);
export const signUpUser = createAction<SignUpRequest>(
  HomeActionTypes.SIGN_UP_USER,
);
export const signInUser = createAction<SignInRequest>(
  HomeActionTypes.SIGN_IN_USER,
);
export const signOutUser = createAction(HomeActionTypes.SIGN_OUT_USER);
export const setUserDetails = createAction<SignUpRequest>(
  HomeActionTypes.SET_USER_DETAILS,
);
export const setUserPoints = createAction<{email: string; points: number}>(
  HomeActionTypes.SET_USER_POINTS,
);
