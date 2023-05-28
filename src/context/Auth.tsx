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

interface AuthContextData {
   user: UserModel;
   signin: (data: SigninDTO) => Promise<void>;
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
            throw new AppError(ERRORS_MESSAGES.CREDENCIALS_INVALID.message);
         else throw new Error(ERRORS_MESSAGES.GENERIC_ERROR.message);
      }
   }

   useEffect(() => {
      getTokenAndUserStorage();
   }, [getTokenAndUserStorage]);

   return (
      <AuthContext.Provider value={{ user, signin }}>
         {children}
      </AuthContext.Provider>
   );
}
