import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HeaderTitle from '../../shared/components/headerTitle/HeaderTitle.component';
import {SCREEN_HEADERS} from '../../shared/constants';
import {HomeStackParamList} from '../../types/navigation.types';
import * as React from 'react';
import {
  homeRoutes,
  NAV_HOME_HOME,
  NAV_HOME_LEADERBOARD,
  NAV_HOME_WORD,
} from './HomeRoutes';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const getDefaultSettings = () => {
  return {
    headerStyle: {
      // backgroundColor: colors.notification,
    },
    headerBackTitle: '',
    headerBackTitleVisible: false,
    // headerTintColor: colors.icons.default,
    headerBackVisible: false,
    headerTitleAlign: 'center',
    headerShadowVisible: false,
  };
};

const HomeStackNavigator = () => {
  const renderHeaderTitle = (headerTitle: string) => (
    <HeaderTitle title={headerTitle} />
  );

  return (
    <HomeStack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <HomeStack.Screen
        name={NAV_HOME_HOME}
        component={homeRoutes[NAV_HOME_HOME].screen}
        options={{
          ...getDefaultSettings(),
          headerTitleAlign: 'center',
          headerTitle: () => renderHeaderTitle(SCREEN_HEADERS.HOME),
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={NAV_HOME_LEADERBOARD}
        component={homeRoutes[NAV_HOME_LEADERBOARD].screen}
        options={{
          ...getDefaultSettings(),
          headerTitleAlign: 'center',
          headerTitle: () => renderHeaderTitle(SCREEN_HEADERS.LEADERBOARD),
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={NAV_HOME_WORD}
        component={homeRoutes[NAV_HOME_WORD].screen}
        options={{
          ...getDefaultSettings(),
          headerTitleAlign: 'center',
          headerTitle: () => renderHeaderTitle(SCREEN_HEADERS.WORD),
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
