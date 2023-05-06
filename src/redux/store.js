import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
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
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import { authorizationReducer } from './authorization/authorizationSlice';

const authorizationPersistConfig = {
  key: 'authorization',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    authorization: persistReducer(authorizationPersistConfig, authorizationReducer),
  },

   middleware,
  devTools: process.env.NODE_ENV === 'development',
});


export const persistor = persistStore(store);