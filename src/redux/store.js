import { configureStore } from '@reduxjs/toolkit';
import calendar from './slices/calendarSlice';
import schedule from './slices/scheduleSlice';

export const store = configureStore({
  reducer: {
    calendar,
    schedule,
  },
});
