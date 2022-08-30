import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

// const initialState = {
//   user: { name: '', email: '' },
//   token: '',
//   isLoggedIn: false,
// };

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
      userApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.user.email;
        state.name = payload.user.name;
        // state.token = payload.token;
        // state.isLoggedIn = true;
      }
    );
  },
});

export const { getCurrentSuccess, loginSuccess } = userSlice.actions;

export default userSlice.reducer;
