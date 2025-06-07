import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import achievementReducer from './slices/achievementSlice';
import coupleReducer from './slices/coupleSlice';
import discoverReducer from './slices/discoverSlice';
import statisticsReducer from './slices/statisticsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    achievement: achievementReducer,
    couple: coupleReducer,
    discover: discoverReducer,
    statistics: statisticsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;