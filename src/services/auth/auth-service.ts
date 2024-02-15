import { privateAPI, publicAPI } from '@libs/axios/api';

import { RegisterResponse, SigninResponse } from './responses';
import { RegisterDto } from './dtos';
import { Response } from '../../@types/api-response';

export const AuthService = {
  async singIn(data: any) {
    return (await publicAPI.post<SigninResponse>('/autenticar', data)).data;
  },

  async register(data: RegisterDto) {
    return (
      await publicAPI.post<Response<RegisterResponse>>('app/register', data)
    ).data;
  },

  async ActivateAccount(code: string) {
    return (await privateAPI.get<Response<any>>(`/valida-usuario/${code}`))
      .data;
  }
};
