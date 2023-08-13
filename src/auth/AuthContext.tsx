import * as React from 'react';
import { IUser } from '../types/user';
import fakeAuthProvider from './fakeAuthProvider';

export interface AuthContextType {
  user: IUser | null;
  signin: (user: IUser, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<IUser | null>(null);

  const signin = React.useCallback((newUser: IUser, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  }, []);

  const signout = React.useCallback((callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  }, []);

  const value = React.useMemo(() => {
    return { user, signin, signout };
  }, [user, signin, signout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return React.useContext(AuthContext);
};
