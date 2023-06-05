import { privateAPI, publicAPI } from '@lib/axios';
import { RegisterResponse, SingInResponse } from './responses';
import { RegisterDTO } from '@domain/dtos/register.dto';

export const AuthService = {
   singIn(data: any) {
      return publicAPI.post<SingInResponse>('/autenticar', data);
   },

   register(data: RegisterDTO) {
      return publicAPI.post<RegisterResponse>('app/register', data);
   },

   validateAccount(code: string) {
      return privateAPI.get(`/valida-usuario/${code}`);
   }
};
