import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabBottomNavigator from './TabBottomNavigator';
import WelcomeScreen from '../screen/';
import LoginScreen from '../screen/login';
import RegisterScreen from '../screen/register';
import VerifyScreen from '../screen/register/verify';
import RegisterDataScreen from '../screen/register/submit';
import ForgotScreen from '../screen/forgot';
import VerifyForgotScreen from '../screen/forgot/verify';
import ForgotDataScreen from '../screen/forgot/submit';
import WhatsappScreen from '../screen/profile/whatsapp';
import ChangePasswordScreen from '../screen/profile/password';
import ExperienceScreen from '../screen/profile/experience';
import AddExperienceScreen from '../screen/profile/experience/add';
import SettingScreen from '../screen/profile/setting';
import PreferenceScreen from '../screen/profile/preference';

import {RootNav} from 'utils';

import {store} from '../store';

const Stack = createStackNavigator();

const AuthStack = createStackNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'Welcome'} component={WelcomeScreen} />
      <AuthStack.Screen name={'Login'} component={LoginScreen} />
      <AuthStack.Screen name={'Register'} component={RegisterScreen} />
      <AuthStack.Screen name={'Verify'} component={VerifyScreen} />
      <AuthStack.Screen name={'RegisterData'} component={RegisterDataScreen} />
      <AuthStack.Screen name={'Forgot'} component={ForgotScreen} />
      <AuthStack.Screen name={'VerifyForgot'} component={VerifyForgotScreen} />
      <AuthStack.Screen name={'ForgotData'} component={ForgotDataScreen} />
    </AuthStack.Navigator>
  );
}

const MainStack = createStackNavigator();
function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen
        name="BottomTab"
        component={TabBottomNavigator}
        options={{
          animationEnabled: false,
        }}
      />
      <MainStack.Screen name={'Whatsapp'} component={WhatsappScreen} />
      <MainStack.Screen
        name={'ChangePassword'}
        component={ChangePasswordScreen}
      />
      <MainStack.Screen name={'Experience'} component={ExperienceScreen} />
      <MainStack.Screen
        name={'AddExperience'}
        component={AddExperienceScreen}
      />
      <MainStack.Screen name={'Setting'} component={SettingScreen} />
      <MainStack.Screen name={'Preference'} component={PreferenceScreen} />
    </MainStack.Navigator>
  );
}

const AppContainer = () => {
  return (
    <NavigationContainer ref={RootNav.navigationRef}>
      <Stack.Navigator
        initialRouteName={store.getState().user.data.token ? 'Main' : 'Auth'}
        headerMode={'none'}>
        <Stack.Screen name={'Auth'} component={AuthStackScreen} />
        <Stack.Screen name={'Main'} component={MainStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
