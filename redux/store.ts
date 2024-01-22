// store

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers here if needed
  },
});

export default store;
