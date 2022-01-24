import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from 'assets';

import JobCollection from '../jobs';
import InterviewCollection from '../interview';
import VacancyCollection from '../vacancy';

const Tab = createMaterialTopTabNavigator();

const tabBarOptions = {
  indicatorStyle: {
    backgroundColor: colors.dwMainColor,
    height: 3,
  },
  activeTintColor: colors.dwMainColor,
  inactiveTintColor: colors.dwGrey,
  labelStyle: {fontSize: 14, fontWeight: 'bold'},
};

const NotificationTopNavigator = () => {
  return (
    <Tab.Navigator
      style={{marginTop: 8}}
      initialRouteName={'Job'}
      tabBarOptions={tabBarOptions}
      backBehavior={'none'}>
      <Tab.Screen name="Job" component={JobCollection} />
      <Tab.Screen name="Interview" component={InterviewCollection} />
      <Tab.Screen name="Vacancy" component={VacancyCollection} />
    </Tab.Navigator>
  );
};

export default NotificationTopNavigator;
