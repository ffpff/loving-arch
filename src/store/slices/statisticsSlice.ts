import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Statistics} from '@types/index';

interface StatisticsState {
  statistics: Statistics | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: StatisticsState = {
  statistics: null,
  isLoading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setStatistics: (state, action: PayloadAction<Statistics>) => {
      state.statistics = action.payload;
    },
    updateStatistics: (state, action: PayloadAction<Partial<Statistics>>) => {
      if (state.statistics) {
        state.statistics = {...state.statistics, ...action.payload};
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setStatistics,
  updateStatistics,
  setLoading,
  setError,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;