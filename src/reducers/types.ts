export interface FormData {
  name: string;
  email: string;
  location: string;
  phoneNumber: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Error {
  message: string;
}
