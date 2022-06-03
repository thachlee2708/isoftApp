import {combineReducers} from 'redux';
import authReducer from './Auth/reducers/authReducer';
import notificationReducer from './Notification/reducers/notificationReducer';
const rootReducer = combineReducers({
  authReducer,
  notificationReducer,
});
export default rootReducer;
