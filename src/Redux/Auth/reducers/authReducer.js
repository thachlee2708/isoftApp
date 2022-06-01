import {UPDATE_TOKEN, UPDATE_FIRST_LOGIN} from '../actions';
const defaultState = {
  token: null,
  firstLogin: true,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN: {
      return {...state, token: action.payload};
    }
    case UPDATE_FIRST_LOGIN: {
      return {...state, firstLogin: action.payload};
    }
    default:
      return state;
  }
};
