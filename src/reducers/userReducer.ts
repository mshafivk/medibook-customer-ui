/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { createUser } from '../thunks/user';
import { FormData as FormDataType } from './types';

interface UserState {
  status: string; // idle | loading | succeeded | failed
  error: string | null | undefined;
  readonly: boolean;
  userInformation: FormDataType;
}

const initialState: UserState = {
  status: 'idle',
  error: null,
  readonly: true,
  userInformation: {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    location: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    lockUser: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.readonly = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.userInformation = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        if (
          action.payload &&
          typeof action.payload === 'object' &&
          'data' in action.payload &&
          typeof action.payload.data === 'object' &&
          action.payload.data !== null &&
          'error' in action.payload.data
        ) {
          state.error = `${action.payload.data.error}`;
        } else {
          state.error = action.error.message;
        }
        state.status = 'failed';
      });
  },
});

export const { lockUser } = userSlice.actions;

export default userSlice.reducer;
