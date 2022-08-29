import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  token: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, { payload }) => {
      const { user, token } = payload;
      state.email = user.email;
      state.name = user.name;
      state.token = token;
      state.isLoggedIn = true;
    },
    getCurrentSuccess: (state, { payload }) => {
      state.email = payload.email;
      state.name = payload.name;
    },
  },
});

export const { loginSuccess, getCurrentSuccess } = userSlice.actions;

export default userSlice.reducer;
