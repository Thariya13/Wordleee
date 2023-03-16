import {
  NAV_HOME_HOME,
  NAV_HOME_LEADERBOARD,
  NAV_HOME_WORD,
} from '../navigation/home/HomeRoutes';
import {WordCategory} from './wordleee.types';

export type HomeStackParamList = {
  [NAV_HOME_HOME]: undefined;
  [NAV_HOME_LEADERBOARD]: undefined;
  [NAV_HOME_WORD]: {
    wordCategory: WordCategory;
  };
};
