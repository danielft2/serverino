import { UserAdressModel } from '@domain/models/user-adress.model';

export type LocationDTO = {
   data?: UserAdressModel;
   error?: string;
};
