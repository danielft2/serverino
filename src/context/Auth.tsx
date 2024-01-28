import { createContext, useCallback, useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { SigninDTO } from '@domain/dtos';
import { RegisterDTO } from '@domain/dtos/register.dto';
import { UserModel } from '@domain/models';
import { AuthService } from '@services/auth.service';
import { ERRORS_MESSAGES } from '@services/errors';
import { AuthStorage } from '@storage/auth-storage';
import { SessionStorage } from '@storage/session-storage';
import { useSession } from '../hooks/shared/useSession';
import { AppError } from '@utils';
import { privateAPI } from '@lib/axios';
import { queryClient } from '@lib/react-query';
import { APP_CONSTANTS } from '@constants';

import { Context } from '../@types/context';

interface AuthContextData {
   token: string;
   refreshSession: UserModel;
   signin: (data: SigninDTO) => Promise<void>;
   signOut: () => Promise<void>;
   register: (data: RegisterDTO) => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
   {} as AuthContextData
);

export function AuthProvider({ children }: Context) {
   const [token, setToken] = useState('');
   const [refreshSession, setRefreshSession] = useState<UserModel>(null);
   const { updateSession } = useSession();

   async function register(data: RegisterDTO) {
      try {
         const response = await AuthService.register(data);
         if (response.meta.status_code === 201) {
            const { user, token } = response.meta.results;
            await saveTokenAndUser(token, user);
         } else if (response.meta.results.telefone[0]) {
            throw new AppError(ERRORS_MESSAGES.PHONE_ALREDY_EXISTS);
         }
      } catch (error) {
         if (error.message === ERRORS_MESSAGES.PHONE_ALREDY_EXISTS) throw error;
         throw new AppError(ERRORS_MESSAGES.GENERIC_ERROR);
      }
   }

   async function signin(data: SigninDTO) {
      try {
         const response = await AuthService.singIn(data);
         await saveTokenAndUser(response.token.access_token, response.user);
      } catch (error) {
         if (error instanceof AxiosError && error.response.status == 401)
            throw new AppError(ERRORS_MESSAGES.CREDENCIALS_INVALID);
         else throw new AppError(ERRORS_MESSAGES.GENERIC_ERROR);
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
         throw new AppError(ERRORS_MESSAGES.GENERIC_ERROR);
      }
   }, []);

   const getTokenAndUserInStorage = useCallback(async () => {
      const results = await Promise.all([
         AuthStorage.retrieveToken(),
         SessionStorage.retrieveSession()
      ]);

      privateAPI.defaults.headers['Authorization'] = `Bearer ${results[0]}`;
      updateSession(results[1]);
      setToken(results[0]);
   }, [updateSession]);

   const saveTokenAndUser = useCallback(
      async (token: string, user: UserModel) => {
         try {
            await Promise.all([
               (AuthStorage.saveToken(token), SessionStorage.saveSession(user))
            ]);
            privateAPI.defaults.headers['Authorization'] = `Bearer ${token}`;
            updateSession(user);
            setToken(token);
         } catch (error) {
            console.log(error);
            signOut();
         }
      },
      [signOut, updateSession]
   );

   const updateRefreshToken = useCallback((token: string) => {
      setToken(token);
   }, []);

   useEffect(() => {
      getTokenAndUserInStorage();
   }, [getTokenAndUserInStorage]);

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
