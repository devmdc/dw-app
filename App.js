/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import AppContainer from './src/navigation/AppContainer';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    async function delay() {
      const dly = await delaySplashScreen();
      if (dly !== null) {
        SplashScreen.hide();
      }
    }

    if (Platform.OS === 'android') {
      delay();
    } else {
      SplashScreen.hide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const delaySplashScreen = () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 500),
    );
  };

  return <AppContainer />;
};

export default App;
