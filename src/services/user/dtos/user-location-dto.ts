import { UserAdressModel } from '@domain/models/user-adress.model';

export type UserLocationDto = {
  data?: UserAdressModel;
  error?: string;
};
