import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Achievement, AchievementStatus} from '@types/index';

interface AchievementState {
  achievements: Achievement[];
  wishedAchievements: string[];
  completedAchievements: string[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AchievementState = {
  achievements: [],
  wishedAchievements: [],
  completedAchievements: [],
  isLoading: false,
  error: null,
};

const achievementSlice = createSlice({
  name: 'achievement',
  initialState,
  reducers: {
    setAchievements: (state, action: PayloadAction<Achievement[]>) => {
      state.achievements = action.payload;
    },
    addAchievement: (state, action: PayloadAction<Achievement>) => {
      state.achievements.push(action.payload);
    },
    updateAchievement: (state, action: PayloadAction<Achievement>) => {
      const index = state.achievements.findIndex(a => a.id === action.payload.id);
      if (index !== -1) {
        state.achievements[index] = action.payload;
      }
    },
    toggleWishlist: (state, action: PayloadAction<string>) => {
      const achievementId = action.payload;
      const index = state.wishedAchievements.indexOf(achievementId);
      if (index === -1) {
        state.wishedAchievements.push(achievementId);
      } else {
        state.wishedAchievements.splice(index, 1);
      }
    },
    markAsCompleted: (state, action: PayloadAction<string>) => {
      const achievementId = action.payload;
      if (!state.completedAchievements.includes(achievementId)) {
        state.completedAchievements.push(achievementId);
      }
      // 更新成就状态
      const achievement = state.achievements.find(a => a.id === achievementId);
      if (achievement) {
        achievement.status = AchievementStatus.COMPLETED;
        achievement.completedAt = new Date();
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
  setAchievements,
  addAchievement,
  updateAchievement,
  toggleWishlist,
  markAsCompleted,
  setLoading,
  setError,
} = achievementSlice.actions;

export default achievementSlice.reducer;