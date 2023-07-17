import { createContext, useCallback, useEffect, useState } from 'react';

import { SigninDTO } from '@domain/dtos';
import { RegisterDTO } from '@domain/dtos/register.dto';
import { UserModel } from '@domain/models';
import { AuthService } from '@services/http/auth.service';
import { ERRORS_MESSAGES } from '@services/http/errors';
import { AuthStorage } from '@storage/auth-storage';
import { SessionStorage } from '@storage/session-storage';
import { AppError } from '@utils';

import { Context } from '../@types/context';

import { AxiosError } from 'axios';
import { privateAPI } from '@lib/axios';

interface AuthContextData {
   user: UserModel;
   refreshToken: string;
   signin: (data: SigninDTO) => Promise<void>;
   register: (data: RegisterDTO) => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
   {} as AuthContextData
);

export function AuthProvider({ children }: Context) {
   const [user, setUser] = useState<UserModel>(null);
   const [refreshToken, setRefreshToken] = useState('');

   const getTokenAndUserStorage = useCallback(async () => {
      const storage = await Promise.all([
         await AuthStorage.retrieveToken(),
         await SessionStorage.retrieveSession()
      ]);
      if (storage[1] && storage[0]) {
         privateAPI.defaults.headers['Authorization'] = `Bearer ${storage[0]}`;
         setUser(storage[1]);
      }
   }, []);

   const updateTokenAndUser = useCallback(
      async (token: string, user: UserModel) => {
         try {
            await Promise.all([
               (AuthStorage.saveToken(token), SessionStorage.saveSession(user))
            ]);
            privateAPI.defaults.headers['Authorization'] = `Bearer ${token}`;
            setUser(user);
         } catch (error) {
            console.log(error);
         }
      },
      []
   );

   const updateRefreshToken = useCallback((token: string) => {
      console.log(token);
      setRefreshToken(token);
   }, []);

   async function signin(data: SigninDTO) {
      try {
         const response = (await AuthService.singIn(data)).data;
         await updateTokenAndUser(response.token.access_token, response.user);
      } catch (error) {
         if (error instanceof AxiosError && error.response.status == 401)
            throw new AppError(ERRORS_MESSAGES.CREDENCIALS_INVALID);
         else throw new AppError(ERRORS_MESSAGES.GENERIC_ERROR);
      }
   }

   const signOut = useCallback(async () => {
      console.log('Deslogou');
   }, []);

   async function register(data: RegisterDTO) {
      try {
         const response = await AuthService.register(data);
         if (response.data.meta.results.telefone[0]) {
            throw new Error('400');
         }
      } catch (error) {
         if (error.message === '400')
            throw new AppError(ERRORS_MESSAGES.PHONE_ALREDY_EXISTS);
         throw new AppError(ERRORS_MESSAGES.GENERIC_ERROR);
      }
   }

   useEffect(() => {
      getTokenAndUserStorage();
   }, [getTokenAndUserStorage]);

   useEffect(() => {
      const subscribe = privateAPI.registerInterceptorToken({
         signOut,
         updateRefreshToken
      });
      return () => subscribe();
   }, [signOut, updateRefreshToken]);

   return (
      <AuthContext.Provider value={{ user, refreshToken, signin, register }}>
         {children}
      </AuthContext.Provider>
   );
}
