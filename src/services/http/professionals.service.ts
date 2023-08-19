import { privateAPI } from '@lib/axios';
import { Response, ProfessionalsListResponse } from './responses';
import { InteractionProfessionalDTO } from '@domain/dtos/interaction.dto';
import { ProfessionalModel } from '@domain/models';

export const ProfessionalsService = {
   async getAllProfessionals(cidadeId: number, page = 1, signal: AbortSignal) {
      return (
         await privateAPI.get<Response<ProfessionalsListResponse>>(
            `app/feed/cidade/${cidadeId}?page=${page}`,
            {
               signal
            }
         )
      ).data;
   },

   async getOneProfessional(id: string, signal: AbortSignal) {
      return (
         await privateAPI.get<Response<ProfessionalModel>>(`app/contas/${id}`, {
            signal
         })
      ).data;
   },

   async interactionProfessional({
      professional_id,
      tipo_id
   }: Partial<InteractionProfessionalDTO>) {
      return (
         await privateAPI.post('/app/contas/interacao', {
            tipo_id,
            user_id: professional_id
         })
      ).data;
   }
};
