import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import { authReducer } from './auth/authSlice';

// Redux Persist configuration for 'auth' slice
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistedAuthReducer, // Use the persisted reducer here
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { contactsReducer } from './contacts/contactsSlice';
// import { filterReducer } from './contacts/filterSlice';
// import { authorizationReducer } from './authorization/authorizationSlice';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const authorizationPersistConfig = {
//   key: 'authorization',
//   // key: 'authorization',
//   storage,
//   whitelist: ['token'],
// };

// export const store = configureStore({
//   reducer: {
//     authorization: persistReducer(authorizationPersistConfig, authorizationReducer),
//     contacts: contactsReducer,
//     filter: filterReducer,    
//   },
//    middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });
// export const persistor = persistStore(store);