// /src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../modules/auth/store/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
