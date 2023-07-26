import { UpdateInforDTO } from '@domain/dtos';
import { privateAPI } from '@lib/axios';
import { Response } from './responses';
import { UserModel } from '@domain/models';

export const SessionsService = {
   async updateInformations(data: UpdateInforDTO) {
      return (
         await privateAPI.put<Response<UserModel>>('/users/atualizacao', data)
      ).data;
   }
};
