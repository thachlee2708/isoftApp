import {
  UPDATE_NOTIFICATION_LIST,
  UPDATE_PREVIOUS_NOTIFICATION_LIST,
  UPDATE_CHECKED_AMOUNT,
} from '../actions';
const defaultState = {
  previousNotificationList: [],
  notificationList: [],
  checkedAmount: 0,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_NOTIFICATION_LIST: {
      return {...state, notificationList: action.payload};
    }
    case UPDATE_PREVIOUS_NOTIFICATION_LIST: {
      return {...state, previousNotificationList: action.payload};
    }
    case UPDATE_CHECKED_AMOUNT: {
      return {...state, checkedAmount: action.payload};
    }
    default:
      return state;
  }
};
