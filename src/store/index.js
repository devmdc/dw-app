import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from '../reducers';

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
};

const reducer = persistReducer(persistConfig, reducers);

const store = createStore(reducer, applyMiddleware(thunk));
const persistor = persistStore(store);

module.exports = {store, persistor};
