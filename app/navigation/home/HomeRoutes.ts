import HomeScreen from '../../modules/home/screens/home/Home.screen';
import LeaderboardScreen from '../../modules/home/screens/leaderboard/Leaderboard.screen';
import WordScreen from '../../modules/home/screens/word/Word.screen';

export const NAV_HOME_HOME = 'Nav_Home_Home';
export const NAV_HOME_LEADERBOARD = 'Nav_Home_Leaderboard';
export const NAV_HOME_WORD = 'Nav_Home_Word';

export const homeRoutes = {
  [NAV_HOME_HOME]: {
    screen: HomeScreen,
  },
  [NAV_HOME_LEADERBOARD]: {
    screen: LeaderboardScreen,
  },
  [NAV_HOME_WORD]: {
    screen: WordScreen,
  },
};
