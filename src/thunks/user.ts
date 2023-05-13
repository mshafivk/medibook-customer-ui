import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { FormData } from '../reducers/types';
import { registerUser } from '../services/userService';

// eslint-disable-next-line import/prefer-default-export
export const createUser = createAsyncThunk(
  'user/createUser',
  async (formData: FormData, thunkAPI) => {
    try {
      const response = await registerUser(formData);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      return thunkAPI.rejectWithValue({ data: error.response?.data });
    }
  }
);
