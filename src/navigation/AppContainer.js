import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screen/';
import LoginScreen from '../screen/login';

const Stack = createStackNavigator();

const AuthStack = createStackNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'Welcome'} component={WelcomeScreen} />
      <AuthStack.Screen name={'Login'} component={LoginScreen} />
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
