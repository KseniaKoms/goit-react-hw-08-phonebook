import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
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
    },
  },
});

export const { loginSuccess } = userSlice.actions;

export default userSlice.reducer;
