import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screen/';
import LoginScreen from '../screen/login';
import RegisterScreen from '../screen/register';
import VerifyScreen from '../screen/register/verify';
import RegisterDataScreen from '../screen/register/submit';
import ForgotScreen from '../screen/forgot';

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
    </AuthStack.Navigator>
  );
}

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Auth'} headerMode={'none'}>
        <Stack.Screen name={'Auth'} component={AuthStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
