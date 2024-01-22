// redux/user/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  mobileNumber: string;
}

const initialState: UserState = {
  mobileNumber: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMobileNumber: (state, action: PayloadAction<string>) => {
      state.mobileNumber = action.payload;
    },
  },
});

export const { setMobileNumber } = userSlice.actions;
export default userSlice.reducer;
