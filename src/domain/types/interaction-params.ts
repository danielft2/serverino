import { InfiniteData } from '@tanstack/react-query';

import { ProfessionalsListResponse, Response } from '@services/http/responses';
import { InteractionTypes } from './interaction-types';

export type InteractionParams = {
   oldFeed: InfiniteData<Response<ProfessionalsListResponse>>;
   professional_uuid: string;
   professional_id: number;
   professionalIndex: number;
   interactionType: InteractionTypes;
   newInteraction: boolean;
};
