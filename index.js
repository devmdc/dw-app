/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import {store, persistor} from './src/store';
import App from './App';
import {name as appName} from './app.json';

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <FlashMessage position={'top'} />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
