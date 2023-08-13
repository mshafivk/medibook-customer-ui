import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Bookings, BookingStatus } from './types';

const initialState: Bookings[] = [];

// Create an async thunk to perform the network request - Move to thunks directory
export const fetchBookings = createAsyncThunk('bookings/fetch', async () => {
  const response = await fetch('/api/bookings');
  const data = await response.json();
  return data;
});

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<Bookings>) => {
      state.push(action.payload);
    },
    updateBookingStatus: (
      state,
      action: PayloadAction<{
        bookingId: string;
        slotNumber: number;
        status: BookingStatus;
      }>
    ) => {
      const { bookingId, slotNumber, status } = action.payload;
      const booking = state.find((b) => b.id === bookingId);

      if (booking) {
        const sessionDetails = booking.sessionDetails.map((session) => {
          const slots = session.slots.map((slot) =>
            slot.slotNumber === slotNumber ? { ...slot, status } : slot
          );
          return { ...session, slots };
        });

        return state.map((b) =>
          b.id === bookingId ? { ...b, sessionDetails } : b
        );
      }

      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBookings.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addBooking, updateBookingStatus } = bookingsSlice.actions;

export default bookingsSlice.reducer;
