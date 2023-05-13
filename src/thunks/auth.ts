import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../services/userService';

// eslint-disable-next-line import/prefer-default-export
export const loginUser = createAsyncThunk(
  'user/login',
  async (user: { email: string; password: string }, thunkAPI) => {
    try {
      return await login(user.email, user.password);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
