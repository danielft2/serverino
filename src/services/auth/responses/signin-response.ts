import { UserModel } from '@services/auth/models/user-model';

export type SigninResponse = {
  token: { access_token: string };
  user: UserModel;
};
