import { ReactNode, createContext, useContext, useState } from 'react';

type AuthStatus =
  | { status: 'loggedIn'; token: string }
  | { status: 'loggedOut' };

type AuthContextProps = {
  authStatus: AuthStatus;
  handleLogin: (token: string) => void;
  logoutUser: () => void;
};

const AuthContext = createContext<AuthContextProps>({
  authStatus: { status: 'loggedOut' },
  handleLogin: (token: string) => {},
  logoutUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = { children: ReactNode };
export default function AuthProvider({ children }: AuthProviderProps) {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) return { status: 'loggedOut' };
    return { status: 'loggedIn', token };
  });

  const handleLogin = (token: string) => {
    setAuthStatus({ status: 'loggedIn', token });
    localStorage.setItem('accessToken', token);
  };

  const logoutUser = () => {
    localStorage.removeItem('accessToken');
    setAuthStatus({ status: 'loggedOut' });
  };

  return (
    <AuthContext.Provider value={{ authStatus, handleLogin, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}
