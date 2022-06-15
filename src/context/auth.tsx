import React, { useEffect, useState } from 'react';

export interface AuthContextInterface {
  token?: string;
  login?: (token: string) => void;
  logout?: () => void;
}

export const AuthContext = React.createContext<AuthContextInterface>({});

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

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
