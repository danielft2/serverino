import { UserModel } from '@domain/models';

export type RegisterResponse = {
   meta: {
      results: {
         token: string;
         user: UserModel;
         telefone: string[];
         email: string[];
      };
      status_code: number;
   };
};
