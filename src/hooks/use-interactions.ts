import { useCallback, useState } from 'react';
import { produce } from 'immer';
import { InfiniteData, useMutation } from '@tanstack/react-query';

import { InteractionParams } from '@domain/types';
import { ProfessionalsService } from '@services/professional/professional-service';
import { InteractionDto } from '@services/professional/dtos/interaction-dto';
import { ProfessionalsListResponse } from '@services/professional/responses';
import { APP_CONSTANTS } from '@constants';
import { queryClient } from '@libs/react-query';

import { useSession } from './use-session';
import { Response } from '../@types/api-response';

export function useInteractions(queryKey: string[]) {
  const [oldFeedCache, setOldFeedCache] = useState<InfiniteData<
    Response<ProfessionalsListResponse>
  > | null>(null);
  const { user } = useSession();

  const { mutateAsync: interactionProfessional } = useMutation(
    async ({ professional_id, tipo_id }: InteractionDto) => {
      try {
        await ProfessionalsService.interactionProfessional({
          professional_id,
          tipo_id
        });
      } catch (error) {
        queryClient.setQueryData(queryKey, () => oldFeedCache);
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
        if (professionalIndex > 4) professional_index = professionalIndex - 5;
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
            (item: any) =>
              item.registro_id === user.id && item.tipo_id == interactionType
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
      setOldFeedCache(queryClient.getQueryData(queryKey));

      queryClient.resetQueries({
        queryKey: [
          APP_CONSTANTS.QUERIES_KEYS.PROFESSIONAL_DETAILS,
          professional_uuid
        ],
        exact: true
      });

      queryClient.setQueryData(
        queryKey,
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
    [interactionProfessional, modifyCacheInteraction, queryKey]
  );

  return {
    handleInteraction
  };
}
