import { createContext, useCallback, useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { RegisterDto, SigninDto } from '@services/auth/dtos';
import { AuthService } from '@services/auth/auth-service';

import { AuthStorage } from '@storage/auth-storage';
import { SessionStorage } from '@storage/session-storage';

import { AppError } from '@utils/others';

import { privateAPI } from '@libs/axios/api';
import { queryClient } from '@libs/react-query';
import { APP_CONSTANTS } from '@constants';

import { Context } from '../@types/context';
import { UserModel } from '@services/auth/models/user-model';

interface AuthContextData {
  token: string;
  refreshSession: UserModel;
  signin: (data: SigninDto) => Promise<void>;
  signOut: () => Promise<void>;
  register: (data: RegisterDto) => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: Context) {
  const [token, setToken] = useState('');
  const [refreshSession, setRefreshSession] = useState<UserModel>(null);

  async function register(data: RegisterDto) {
    try {
      const response = await AuthService.register(data);
      if (response.meta.status_code === 201) {
        const { user, token } = response.meta.results;
        await saveTokenAndUser(token, user);
      } else if (response.meta.results.telefone[0]) {
        throw new AppError(APP_CONSTANTS.ERRORS_MESSAGES.PHONE_ALREDY_EXISTS);
      }
    } catch (error) {
      if (error.message === APP_CONSTANTS.ERRORS_MESSAGES.PHONE_ALREDY_EXISTS)
        throw error;
      throw new AppError(APP_CONSTANTS.ERRORS_MESSAGES.GENERIC_ERROR);
    }
  }

  async function signin(data: SigninDto) {
    try {
      const response = await AuthService.singIn(data);
      await saveTokenAndUser(response.token.access_token, response.user);
    } catch (error) {
      if (error instanceof AxiosError && error.response.status == 401)
        throw new AppError(APP_CONSTANTS.ERRORS_MESSAGES.CREDENCIALS_INVALID);
      else throw new AppError(APP_CONSTANTS.ERRORS_MESSAGES.GENERIC_ERROR);
    }
  }

  const signOut = useCallback(async () => {
    try {
      setToken('');
      queryClient.resetQueries([APP_CONSTANTS.QUERIES_KEYS.QUERY_FEED]);
      queryClient.resetQueries({
        queryKey: [APP_CONSTANTS.QUERIES_KEYS.PROFESSIONAL_DETAILS],
        exact: false
      });

      await Promise.all([
        SessionStorage.closeSession(),
        AuthStorage.deleteToken()
      ]);
    } catch (error) {
      throw new AppError(APP_CONSTANTS.ERRORS_MESSAGES.GENERIC_ERROR);
    }
  }, []);

  const getTokenStorage = useCallback(async () => {
    const token = await AuthStorage.retrieveToken();
    privateAPI.defaults.headers['Authorization'] = `Bearer ${token}`;
    setToken(token);
  }, []);

  const saveTokenAndUser = useCallback(
    async (token: string, user: UserModel) => {
      try {
        await Promise.all([
          (AuthStorage.saveToken(token), SessionStorage.saveSession(user))
        ]);
        privateAPI.defaults.headers['Authorization'] = `Bearer ${token}`;
        setRefreshSession(user);
        setToken(token);
      } catch (error) {
        console.log(error);
        signOut();
      }
    },
    [signOut]
  );

  const updateRefreshToken = useCallback((token: string) => {
    setToken(token);
  }, []);

  useEffect(() => {
    getTokenStorage();
  }, [getTokenStorage]);

  useEffect(() => {
    const subscribe = privateAPI.registerInterceptorToken({
      signOut,
      updateRefreshToken
    });
    return () => subscribe();
  }, [signOut, updateRefreshToken]);

  return (
    <AuthContext.Provider
      value={{ token, refreshSession, signin, signOut, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}
