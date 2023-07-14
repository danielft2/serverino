import { privateAPI } from '@lib/axios';
import { Response, FeedResponse } from './responses';

export const FeedService = {
   async getAllProfessionals(cidadeId: number, page = 1) {
      return await privateAPI.get<Response<FeedResponse>>(
         `app/feed/cidade/${cidadeId}?page=${page}`
      );
   }
};
