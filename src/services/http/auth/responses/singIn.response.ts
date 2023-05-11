import { UserModel } from '@domain/models';

export type SingInResponse = {
   token: { access_token: string };
   user: UserModel;
};
