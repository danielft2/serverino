import { privateAPI } from '@lib/axios';
import { Response, ProfessionalsListResponse } from './responses';
import { InteractionProfessionalDTO } from '@domain/dtos/interaction';

export const ProfessionalsService = {
   async getAllProfessionals(cidadeId: number, page = 1) {
      return (
         await privateAPI.get<Response<ProfessionalsListResponse>>(
            `app/feed/cidade/${cidadeId}?page=${page}`
         )
      ).data;
   },

   async interactionProfessional({
      user_id,
      tipo_id
   }: InteractionProfessionalDTO) {
      return (
         await privateAPI.post('/app/contas/interacao', {
            tipo_id,
            user_id
         })
      ).data;
   }
};
