import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {productsSlice} from '@store/slices/productsSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['products'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    products: productsSlice.reducer,
  }),
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export {store, persistor};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
