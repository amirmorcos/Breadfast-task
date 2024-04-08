import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import {useDispatch} from 'react-redux';

export const store = configureStore({
  reducer: {postsList: postsReducer},
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type useAppSelector = typeof store.getState;
