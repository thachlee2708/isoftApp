import {combineReducers} from 'redux';
import notificationReducer from './Notification/reducers/notificationReducer';
import authReducer from './Auth/reducers/authReducer';
const rootReducer = combineReducers({
  notificationReducer,
  authReducer,
});
export default rootReducer;
