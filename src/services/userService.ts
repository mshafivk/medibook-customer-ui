import { FormData, User } from '../reducers/types';
import { IUser } from '../types/user';
import api from './api';
import { API_URL_PREFIXES } from './api.constants';

export const registerUser = async (data: FormData) =>
  api.post(`${API_URL_PREFIXES.USERS}/register`, data);

export const fetchUser = (id: number) => api.get(`/user/${id}`);

export interface ILoginResponse {
  success: boolean;
  token: string;
  user: IUser;
}

export const login = async (
  email: string,
  password: string
): Promise<ILoginResponse> => {
  try {
    const response = await api.post<ILoginResponse>(
      `${API_URL_PREFIXES.USERS}/login`,
      {
        email,
        password,
      }
    );
    if (response.data && response.data.success) {
      return response.data;
    }
    throw new Error('Invalid email or password');
  } catch (error) {
    throw new Error('Invalid email or password');
  }
};
