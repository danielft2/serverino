import { useCallback, useState } from 'react';
import { produce } from 'immer';
import { InfiniteData, useMutation } from '@tanstack/react-query';

import { InteractionProfessionalDTO } from '@domain/dtos';
import { InteractionParams } from '@domain/types';
import { ProfessionalsListResponse, Response } from '@services/responses';
import { ProfessionalsService } from '@services/professionals.service';
import { useSessionStore } from '@store/session';
import { queryClient } from '@lib/react-query';
import { APP_CONSTANTS } from '@constants';

export function useFeedInteractions() {
   const [oldFeedCache, setOldFeedCache] = useState<InfiniteData<
      Response<ProfessionalsListResponse>
   > | null>(null);
   const user = useSessionStore((state) => state.user);

   const { mutateAsync: interactionProfessional } = useMutation(
      async ({ professional_id, tipo_id }: InteractionProfessionalDTO) => {
         try {
            await ProfessionalsService.interactionProfessional({
               professional_id,
               tipo_id
            });
         } catch (error) {
            queryClient.setQueryData(
               [APP_CONSTANTS.QUERIES_KEYS.QUERY_FEED],
               () => oldFeedCache
            );
         }
      }
   );

   const modifyCacheInteraction = useCallback(
      ({
         oldFeed,
         professional_id,
         professionalIndex,
         interactionType,
         newInteraction
      }: Partial<InteractionParams>) => {
         const pageInteraction = Math.floor(professionalIndex / 5);
         let professional_index = 0;

         if (professionalIndex > 9) {
            const unit = professionalIndex
               .toString()
               .charAt(professionalIndex.toString().length - 1);
            const index = parseInt(unit);

            if (index > 4) professional_index = index - 5;
            else professional_index = index;
         } else {
            if (professionalIndex > 4)
               professional_index = professionalIndex - 5;
            else professional_index = professionalIndex;
         }

         return produce(oldFeed, (draftState) => {
            const interactions =
               draftState.pages[pageInteraction].meta.results.data[
                  professional_index
               ].usuario.interacoes;

            if (newInteraction) {
               interactions.push({
                  tipo_id: interactionType,
                  user_id: professional_id,
                  registro_id: user.id
               });
            } else {
               const indexInteractionMine = interactions.findIndex(
                  (item) =>
                     item.registro_id === user.id &&
                     item.tipo_id == interactionType
               );
               interactions.splice(indexInteractionMine, 1);
            }
         });
      },
      [user.id]
   );

   const handleInteraction = useCallback(
      ({
         professional_id,
         professional_uuid,
         professionalIndex,
         interactionType,
         newInteraction
      }: Partial<InteractionParams>) => {
         setOldFeedCache(
            queryClient.getQueryData([APP_CONSTANTS.QUERIES_KEYS.QUERY_FEED])
         );

         queryClient.resetQueries({
            queryKey: [
               APP_CONSTANTS.QUERIES_KEYS.PROFESSIONAL_DETAILS,
               professional_uuid
            ],
            exact: true
         });

         queryClient.setQueryData(
            [APP_CONSTANTS.QUERIES_KEYS.QUERY_FEED],
            (oldFeed: InfiniteData<Response<ProfessionalsListResponse>>) => {
               return modifyCacheInteraction({
                  oldFeed,
                  professional_id,
                  professionalIndex,
                  interactionType,
                  newInteraction
               });
            }
         );

         interactionProfessional({
            professional_id,
            tipo_id: interactionType
         });
      },
      [interactionProfessional, modifyCacheInteraction]
   );

   return {
      handleInteraction
   };
}
