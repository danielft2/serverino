import { UserModel } from '@domain/models';

export type RegisterResponse = {
   token: string;
   user: UserModel;
   telefone: string[];
   email: string[];
};
