import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: '', email: '' },
    token: '',
    isLoggedIn: false,
  },
  // reducers: {
  // loginSuccess: (state, { payload }) => {
  //   const { user, token } = payload;
  //   state.email = user.email;
  //   state.name = user.name;
  //   state.token = token;
  // },
  // getCurrentSuccess: (state, { payload }) => {
  //   state.email = payload.email;
  //   state.name = payload.name;
  // },
  // },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.signUp.matchFulfilled,
      (state, { payload }) => {
        state.user.email = payload.user.email;
        state.user.name = payload.user.name;
        state.token = payload.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user.email = payload.user.email;
        state.user.name = payload.user.name;
        state.token = payload.token;
        state.isLoggedIn = true;
      }
    );
  },
});

export const { getCurrentSuccess, loginSuccess } = userSlice.actions;

export default userSlice.reducer;
