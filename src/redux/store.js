import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './user/userApi';
import { contactsApi } from './contacts/contactsApi';
import { filterReducer } from './contacts/filterSlice';
import userReducer from './user/userSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: persistedUserReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      thunk: {
        extraArgument: { userApi, contactsApi },
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    userApi.middleware,
    contactsApi.middleware,
  ],
});

export const persistor = persistStore(store);
