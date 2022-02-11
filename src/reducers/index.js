import {combineReducers} from 'redux';
import userReducer from './userReducer';
import vacancyReducer from './vacancyReducer';
import preferenceReducer from './preferenceReducer';

const reducer = combineReducers({
  user: userReducer,
  vacancy: vacancyReducer,
  preference: preferenceReducer,
});

export default reducer;
