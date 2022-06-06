import {createSlice} from '@reduxjs/toolkit';

const defaultState = {
  previousNotificationList: [],
  notificationList: [],
  checkedAmount: 0,
};

export const notificationReducer = createSlice({
  name: 'notificationReducer',
  initialState: defaultState,
  reducers: {
    updateNotificationList: (state, action) => {
      state.notificationList = action.payload;
    },
    updatePreviousNotificationList: (state, action) => {
      state.previousNotificationList = action.payload;
    },
    updateCheckedAmount: (state, action) => {
      state.checkedAmount = action.payload;
    },
  },
});
export const {
  updateNotificationList,
  updatePreviousNotificationList,
  updateCheckedAmount,
} = notificationReducer.actions;
export default notificationReducer.reducer;
