export interface FormData {
  name: string;
  email: string;
  location: string;
  phoneNumber: string;
  password: string;
}

export interface UserState {
  status: string; // idle | loading | succeeded | failed
  error: string | null | undefined;
  readonly: boolean;
  userInformation: FormData;
}

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface Error {
  message: string;
}

export interface Bookings {
  id?: string;
  datetime: number;
  sessionDetails: {
    sessionName: string;
    sessionDescription: string;
    slots: Slots[];
  }[] /* morning or afternoon to be configured via admin */;
}

export type BookingStatus = 'booked' | 'processing' | 'vacant';

export interface Slots {
  slotNumber: number;
  status: BookingStatus;
  bookedBy: string;
}
