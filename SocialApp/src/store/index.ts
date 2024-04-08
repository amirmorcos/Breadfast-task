import {combineReducers, configureStore} from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import {useDispatch} from 'react-redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['postsList.comments', 'postsList.loading'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    postsList: postsReducer,
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type useAppSelector = typeof store.getState;
