import { createContext, useCallback, useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { AuthStorage } from '@storage/auth-storage';
import { SessionStorage } from '@storage/session-storage';

import { AuthService } from '@services/http/auth';
import { ERRORS_MESSAGES } from '@services/http/errors';

import { Context } from '../@types/context';
import { SigninDTO } from '@domain/dtos';
import { UserModel } from '@domain/models';
import { AppError } from '@utils';
import { RegisterDTO } from '@domain/dtos/register.dto';

interface AuthContextData {
   user: UserModel;
   signin: (data: SigninDTO) => Promise<void>;
   register: (data: RegisterDTO) => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
   {} as AuthContextData
);

export function AuthProvider({ children }: Context) {
   const [user, setUser] = useState<UserModel>(null);

   const getTokenAndUserStorage = useCallback(async () => {
      const storage = await Promise.all([
         await AuthStorage.retrieveToken(),
         await SessionStorage.retrieveSession()
      ]);
      if (storage[1]) setUser(storage[1]);
   }, []);

   const updateaTokenAndUser = useCallback(
      async (token: string, user: UserModel) => {
         try {
            await Promise.all([
               (AuthStorage.saveToken(token), SessionStorage.saveSession(user))
            ]);
            setUser(user);
         } catch (error) {
            console.log(error);
         }
      },
      []
   );

   async function signin(data: SigninDTO) {
      try {
         const response = (await AuthService.singIn(data)).data;
         await updateaTokenAndUser(response.token.access_token, response.user);
      } catch (error) {
         if (error instanceof AxiosError && error.response.status == 401)
            throw new AppError(ERRORS_MESSAGES.CREDENCIALS_INVALID);
         else throw new AppError(ERRORS_MESSAGES.GENERIC_ERROR);
      }
   }

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

   return (
      <AuthContext.Provider value={{ user, signin, register }}>
         {children}
      </AuthContext.Provider>
   );
}
