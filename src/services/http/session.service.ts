import { UpdateInforDTO } from '@domain/dtos';
import { privateAPI } from '@lib/axios';
import { Response } from './responses';
import { UserModel } from '@domain/models';
import { UpdateAvatarResponse } from './responses/update-avatar.response';

export const SessionsService = {
   async updateInformations(data: UpdateInforDTO) {
      return (
         await privateAPI.put<Response<UserModel>>('/users/atualizacao', data)
      ).data;
   },

   async updateAvatar(userId: number, image: string) {
      return (
         await privateAPI.put<Response<UpdateAvatarResponse>>(
            `/usuario-imagem/${userId}`,
            {
               image
            }
         )
      ).data;
   }
};
