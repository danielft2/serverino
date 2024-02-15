import { privateAPI } from '../../libs/axios/api';

import { Response } from '../../@types/api-response';
import { InteractionDto } from './dtos/interaction-dto';
import { AreaModel, ProfessionalModel } from './models';
import { ProfessionalsListResponse } from './responses/professionals-list-response';

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
  }: Partial<InteractionDto>) {
    return (
      await privateAPI.post('/app/contas/interacao', {
        tipo_id,
        user_id: professional_id
      })
    ).data;
  },

  async getAllAreas() {
    return (await privateAPI.get<Response<AreaModel[]>>('/areas')).data;
  },

  async getAllProfessionalByArea(
    page: number,
    area_id: number,
    signal: AbortSignal
  ) {
    return (
      await privateAPI.post<Response<ProfessionalsListResponse>>(
        `/app/contas/busca-por-categoria?page=${page}`,
        { area_id },
        { signal }
      )
    ).data;
  }
};
