import { InfiniteData } from '@tanstack/react-query';

import { InteractionTypes } from './interaction-types';
import { Response } from '../../@types/api-response';
import { ProfessionalsListResponse } from '@services/professional/responses';

export type InteractionParams = {
  oldFeed: InfiniteData<Response<ProfessionalsListResponse>>;
  professional_uuid: string;
  professional_id: number;
  professionalIndex: number;
  interactionType: InteractionTypes;
  newInteraction: boolean;
};
