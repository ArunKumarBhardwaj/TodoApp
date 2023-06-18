import {configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {rootReducer} from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // USING ASYNC STORAGE TO PERSIST OUR REDUX DATA
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: any = configureStore({
  reducer: persistedReducer,
  middleware: (
    getDefaultMiddleware, // ADDING THIS TO AVOID GETTING SERIALIZALBLE ERROR (USING FROM REDUX DOCS).
  ) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export {store, persistor};
