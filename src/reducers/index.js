import {combineReducers} from 'redux';
import userReducer from './userReducer';
import preferenceReducer from './preferenceReducer';

const reducer = combineReducers({
  user: userReducer,
  preference: preferenceReducer,
});

export default reducer;
