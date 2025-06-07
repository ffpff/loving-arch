import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CoupleRelation, User} from '@types/index';

interface CoupleState {
  couple: CoupleRelation | null;
  partner: User | null;
  isConnected: boolean;
  connectionCode: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CoupleState = {
  couple: null,
  partner: null,
  isConnected: false,
  connectionCode: null,
  isLoading: false,
  error: null,
};

const coupleSlice = createSlice({
  name: 'couple',
  initialState,
  reducers: {
    setCouple: (state, action: PayloadAction<CoupleRelation>) => {
      state.couple = action.payload;
      state.isConnected = true;
    },
    setPartner: (state, action: PayloadAction<User>) => {
      state.partner = action.payload;
    },
    setConnectionCode: (state, action: PayloadAction<string>) => {
      state.connectionCode = action.payload;
    },
    disconnect: (state) => {
      state.couple = null;
      state.partner = null;
      state.isConnected = false;
      state.connectionCode = null;
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
  setCouple,
  setPartner,
  setConnectionCode,
  disconnect,
  setLoading,
  setError,
} = coupleSlice.actions;

export default coupleSlice.reducer;