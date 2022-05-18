import UPDATE_NOTIFICATION_LIST from '../actions';

const defaultState = {
  notificationList: [],
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_NOTIFICATION_LIST: {
      return {...state, notificationList: action.payload};
    }

    default:
      return state;
  }
};
