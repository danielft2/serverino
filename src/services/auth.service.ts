import { RegisterDTO } from '@domain/dtos/register.dto';
import { privateAPI, publicAPI } from '@lib/axios';

import { Response, RegisterResponse, SingInResponse } from './responses';

export const AuthService = {
   async singIn(data: any) {
      return (await publicAPI.post<SingInResponse>('/autenticar', data)).data;
   },

   async register(data: RegisterDTO) {
      return (
         await publicAPI.post<Response<RegisterResponse>>('app/register', data)
      ).data;
   },

   async ActivateAccount(code: string) {
      return (await privateAPI.get<Response<any>>(`/valida-usuario/${code}`))
         .data;
   }
};
