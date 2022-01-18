import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from 'assets';

import PositionCollection from '../position';
import LocationCollection from '../location';

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

const PreferenceTopNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Position'}
      tabBarOptions={tabBarOptions}
      backBehavior={'none'}>
      <Tab.Screen name="Position" component={PositionCollection} />
      <Tab.Screen name="Location" component={LocationCollection} />
    </Tab.Navigator>
  );
};

export default PreferenceTopNavigator;
