import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomBar} from 'component';

import VacancyScreen from '../screen/vacancy';
import NotificationScreen from '../screen/notification';
import ProfileScreen from '../screen/profile';

const Tab = createBottomTabNavigator();

export default function TabBottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'Vacancy'}
      tabBar={props => <BottomBar {...props} />}>
      <Tab.Screen name="Vacancy" component={VacancyScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
