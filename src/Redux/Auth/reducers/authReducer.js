import {createSlice} from '@reduxjs/toolkit';

const defaultState = {token: null, firstLogin: true};

export const authReducer = createSlice({
  name: 'authReducer',
  initialState: defaultState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    updateFirstLogin: (state, action) => {
      state.firstLogin = action.payload;
    },
  },
});
export const {updateToken, updateFirstLogin} = authReducer.actions;
export default authReducer.reducer;
