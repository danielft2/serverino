import { privateAPI, publicAPI } from '@lib/axios';
import { RegisterResponse, SingInResponse } from './responses';

export const AuthService = {
   singIn(payload: any) {
      return publicAPI.post<SingInResponse>('/autenticar', payload);
   },

   register(payload: any) {
      return publicAPI.post<RegisterResponse>('app/register', payload);
   },

   validateAccount(code: string) {
      return privateAPI.get(`/valida-usuario/${code}`);
   }
};
