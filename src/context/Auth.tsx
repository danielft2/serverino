import { createContext, useCallback, useEffect, useState } from 'react';

import { AuthService } from '@services/http/auth';
import { SingInResponse } from '@services/http/auth/responses';
import { ERRORS_MESSAGES } from '@services/http/errors';

import { SigninDTO } from '@domain/dtos';
import { UserModel } from '@domain/models';

import { Context } from '../@types/context';
import { UseMutateAsyncFunction, useMutation } from '@tanstack/react-query';

import { AppError } from '@utils';
import { AuthStorage } from '@storage/AuthStorage';
import { SessionStorage } from '@storage/SessionStorage';

interface AuthContextData {
   user: UserModel;
   signin: UseMutateAsyncFunction<SingInResponse, unknown, SigninDTO, unknown>;
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

   const storageSession = useCallback(async (user: UserModel) => {
      try {
         await SessionStorage.saveSession(user);
      } catch (error) {
         if (error instanceof AppError) {
            console.log(error.message());
         }
      }
   }, []);

   const { mutateAsync: signin } = useMutation(async (data: SigninDTO) => {
      try {
         const response = (await AuthService.singIn(data)).data;
         await updateaTokenAndUser(response.token.access_token, response.user);
         return response;
      } catch (error) {
         if (error.response.status == 401)
            throw new Error(ERRORS_MESSAGES.CREDENCIALS_INVALID.message);
         else throw new Error(ERRORS_MESSAGES.GENERIC_ERROR.message);
      }
   });

   useEffect(() => {
      getTokenAndUserStorage();
   }, [getTokenAndUserStorage]);

   return (
      <AuthContext.Provider value={{ user, signin }}>
         {children}
      </AuthContext.Provider>
   );
}
