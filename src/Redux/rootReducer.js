import {combineReducers} from 'redux';
import notificationReducer from './Notification/reducers/notificationReducer';
const rootReducer = combineReducers({
  notificationReducer,
});
export default rootReducer;
