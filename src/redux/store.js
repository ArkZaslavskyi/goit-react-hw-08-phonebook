import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { authReducer } from './auth/slice';
import { contactsReducer, filterReducer } from './contacts/slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: 'filter',
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: persistReducer(
      contactsPersistConfig,
      combineReducers({ contacts: contactsReducer, filter: filterReducer })
    ),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
