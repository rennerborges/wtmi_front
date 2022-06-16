import React, { useEffect, useState } from 'react';

export interface AuthContextInterface {
  token: string;
  Login: (token: string) => void;
  Logout: () => void;
}

export const AuthContext = React.createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

interface Props {
  children?: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem('token') || ''
  );

  useEffect(() => {
    const userStorage = localStorage.getItem('token');
    setToken(userStorage || '');
  }, []);

  const Login = (token: string) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const Logout = () => {
    localStorage.removeItem('token');
    setToken('');
    window.location.pathname = '/';
  };

  return (
    <AuthContext.Provider value={{ token, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
