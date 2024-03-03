import { combineReducers } from 'redux';
import { myappReducer, usersReducer } from './slices';

export default combineReducers({
  user: usersReducer,
  myapp: myappReducer,
});
