import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Achievement} from '@types/index';

interface DiscoverState {
  discoverQueue: Achievement[];
  currentIndex: number;
  likedAchievements: string[];
  rejectedAchievements: string[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DiscoverState = {
  discoverQueue: [],
  currentIndex: 0,
  likedAchievements: [],
  rejectedAchievements: [],
  isLoading: false,
  error: null,
};

const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    setDiscoverQueue: (state, action: PayloadAction<Achievement[]>) => {
      state.discoverQueue = action.payload;
      state.currentIndex = 0;
    },
    nextCard: (state) => {
      if (state.currentIndex < state.discoverQueue.length - 1) {
        state.currentIndex += 1;
      }
    },
    likeAchievement: (state, action: PayloadAction<string>) => {
      if (!state.likedAchievements.includes(action.payload)) {
        state.likedAchievements.push(action.payload);
      }
    },
    rejectAchievement: (state, action: PayloadAction<string>) => {
      if (!state.rejectedAchievements.includes(action.payload)) {
        state.rejectedAchievements.push(action.payload);
      }
    },
    resetQueue: (state) => {
      state.currentIndex = 0;
      state.discoverQueue = [];
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
  setDiscoverQueue,
  nextCard,
  likeAchievement,
  rejectAchievement,
  resetQueue,
  setLoading,
  setError,
} = discoverSlice.actions;

export default discoverSlice.reducer;