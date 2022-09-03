import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
  isFetching: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
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
    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, state => {
      state.user.email = '';
      state.user.name = '';
      state.token = '';
      state.isLoggedIn = false;
    });
    builder.addMatcher(
      userApi.endpoints.currentUser.matchFulfilled,
      (state, { payload }) => {
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.isLoggedIn = true;
        state.isFetching = false;
      }
    );
    builder.addMatcher(userApi.endpoints.currentUser.matchPending, state => {
      state.isFetching = true;
    });
  },
});

export default userSlice.reducer;
