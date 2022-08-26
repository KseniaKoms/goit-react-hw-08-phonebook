import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './user/userApi';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
});
