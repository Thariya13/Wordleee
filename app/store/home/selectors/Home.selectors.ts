import {RootState} from '../../RootReducer';

export const selectUsers = (state: RootState) => state.home.users;
export const selectWordCategories = (state: RootState) =>
  state.home.wordCategories;
export const selectAuthUser = (state: RootState) => state.home.authUser;
