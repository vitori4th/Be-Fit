import { createContext, useEffect, useState, ReactNode } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';

import UserService from '@/app/services/userService';
import api from '@/app/utils/api';

type User = {
  name: string;
  lastname: string;
  email: string;
  cellphone: string;
  dateBirth: string;
}

type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void; // Adicionado para gerenciar a saída
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const userServiceH = new UserService(api);
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();

    if (token) {
      userServiceH.recoverUserInformation().then(response => {
        setUser(response);
      });
    }
  }, []);

  async function signIn({ email, password }: SignInData): Promise<void> {
    try {
      const response = await userServiceH.signInRequest({
        email,
        password,
      });

      if (!response) {
        console.error('Sign-in request returned undefined');
        return;
      }

      const { token, user } = response;
      setUser(user);
      console.log(user, token);

      // Redirecionar para a página desejada após o login
      // Router.push('/dashboard');
      return user;
    } catch (error) {
      console.error('Sign-in error:', error);
      throw error;
    }
  }

  function signOut() {
    userServiceH.logout();
    setUser(null);
    Router.push('/'); 
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
