import { RegisterDTO } from '@domain/dtos/register.dto';
import { privateAPI, publicAPI } from '@lib/axios';

import { Response, RegisterResponse, SingInResponse } from './responses';

export const AuthService = {
   singIn(data: any) {
      return publicAPI.post<SingInResponse>('/autenticar', data);
   },

   register(data: RegisterDTO) {
      return publicAPI.post<Response<RegisterResponse>>('app/register', data);
   },

   validateAccount(code: string) {
      return privateAPI.get(`/valida-usuario/${code}`);
   }
};