import { UserModel } from '../models/user-model';

export type RegisterResponse = {
  token: string;
  user: UserModel;
  telefone: string[];
  email: string[];
};
