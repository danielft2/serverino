import { createContext, useCallback, useEffect, useState } from 'react';

import { AuthService } from '@services/http/auth';
import { SingInResponse } from '@services/http/auth/responses';
import { ERRORS_MESSAGES } from '@services/http/errors';

import { SigninDTO } from '@domain/dtos';
import { UserModel } from '@domain/models';

import { Context } from '../@types/context';
import { UseMutateAsyncFunction, useMutation } from '@tanstack/react-query';

import { saveToken, retrieveToken } from '@storage/auth';
import { saveSession } from '@storage/session';
import { AppError } from '@utils';

interface AuthContextData {
   token: string;
   signin: UseMutateAsyncFunction<SingInResponse, unknown, SigninDTO, unknown>;
}

export const AuthContext = createContext<AuthContextData>(
   {} as AuthContextData
);

export function AuthProvider({ children }: Context) {
   const [token, setToken] = useState(null);

   const getTokenStorage = useCallback(async () => {
      const acess_token = await retrieveToken();
      if (acess_token) setToken(acess_token);
   }, []);

   const updateToken = useCallback(async (token: string) => {
      try {
         await saveToken(token);
         setToken(token);
      } catch (error) {
         if (error instanceof AppError) {
            if (token) setToken(null);
         }
      }
   }, []);

   const storageSession = useCallback(async (user: UserModel) => {
      try {
         await saveSession(user);
      } catch (error) {
         if (error instanceof AppError) {
            console.log(error.message());
         }
      }
   }, []);

   const { mutateAsync: signin } = useMutation(
      async (data: SigninDTO) => {
         try {
            const response = (await AuthService.singIn(data)).data;
            await Promise.all([
               storageSession(response.user),
               updateToken(response.token.access_token)
            ]);
            return response;
         } catch (error) {
            if (error.response.status == 401)
               throw new Error(ERRORS_MESSAGES.CREDENCIALS_INVALID.message);
            else throw new Error(ERRORS_MESSAGES.GENERIC_ERROR.message);
         }
      },
      {
         onSuccess(data: SingInResponse) {
            console.log(data);
         }
      }
   );

   useEffect(() => {
      getTokenStorage();
   }, [getTokenStorage]);

   return (
      <AuthContext.Provider value={{ token, signin }}>
         {children}
      </AuthContext.Provider>
   );
}
