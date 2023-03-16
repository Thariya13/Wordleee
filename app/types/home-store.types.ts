import {WordCategory} from './wordleee.types';

export interface HomeState {
  wordCategories?: WordCategory[];
  authUser: any;
  users?: any[];
  error: any;
}
