import { privateAPI } from '@lib/axios';
import { Response, ProfessionalsListResponse } from './responses';

export const ProfessionalsService = {
   async getAllProfessionals(cidadeId: number, page = 1) {
      return (
         await privateAPI.get<Response<ProfessionalsListResponse>>(
            `app/feed/cidade/${cidadeId}?page=${page}`
         )
      ).data;
   }
};
