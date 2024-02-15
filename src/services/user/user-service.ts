import { privateAPI } from '../../libs/axios/api';
import { UpdateAvatarResponse } from './responses/update-avatar-response';
import { Response } from '../../@types/api-response';
import { UserModel } from '../auth/models/user-model';
import { UserUpdateDto, UserUpdatePasswordDto } from './dtos';

export const UserService = {
  async updateInformations(data: UserUpdateDto) {
    return (
      await privateAPI.put<Response<UserModel>>('/users/atualizacao', data)
    ).data;
  },

  async updatePassword(data: UserUpdatePasswordDto) {
    return (await privateAPI.post<Response<any>>('/users/muda-senha', data))
      .data;
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
