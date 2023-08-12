import { useCallback, useEffect, useState } from 'react';
import { InfiniteData, useMutation } from '@tanstack/react-query';
import { queryClient } from '@lib/react-query';

import { ProfessionalInteraction } from '@domain/types';
import { InteractionProfessionalDTO } from '@domain/dtos';
import { ProfessionalsService } from '@services/http/professionals.service';
import { ProfessionalsListResponse, Response } from '@services/http/responses';
import { APP_MESSAGES } from '@constants';

import { useSession } from '../shared/useSession';

export function useProfessional({
   type,
   interactions,
   professional_id,
   professional_uuid
}: ProfessionalInteraction) {
   const [stateInteraction, setStateInteraction] = useState({
      count: 0,
      state: false
   });
   const { user } = useSession();

   const { mutateAsync: interactionProfessional } = useMutation({
      mutationKey: [APP_MESSAGES.MUTATIONS_KEYS.PROFESSIONAL_INTERACTION],
      mutationFn: ({ professional_id, tipo_id }: InteractionProfessionalDTO) =>
         ProfessionalsService.interactionProfessional({
            tipo_id,
            professional_id
         }),
      onSuccess: onSuccessInteraction,
      onError: changeStateInteraction
   });

   async function handleClick() {
      queryClient.resetQueries({
         queryKey: [
            APP_MESSAGES.QUERIES_KEYS.PROFESSIONAL_DETAILS,
            professional_uuid
         ],
         exact: true
      });

      changeStateInteraction();
      interactionProfessional({ tipo_id: type, professional_id });
   }

   const calculateInteractions = useCallback(() => {
      const countData = { likes: 0, someInteraction: false };

      interactions.forEach((item) => {
         if (item.registro_id === user.id && item.tipo_id === type)
            countData.someInteraction = true;
         if (item.tipo_id === type) countData.likes++;
      });

      setStateInteraction({
         count: countData.likes,
         state: countData.someInteraction ? true : false
      });
   }, [interactions, user.id, type]);

   function searchProfessional(
      professionals: InfiniteData<Response<ProfessionalsListResponse>>
   ) {
      const search = { indexPage: null, indexProfessional: null };

      for (const index in professionals.pages) {
         const professionalsIndex = professionals.pages[
            index
         ].meta.results.data.findIndex(
            (item) => item.user_id === professional_id
         );

         if (professionalsIndex >= 0) {
            search.indexPage = index.toString();
            search.indexProfessional = professionalsIndex.toString();
            break;
         }
      }

      if (search.indexPage && search.indexProfessional) {
         if (stateInteraction.state) {
            professionals.pages[search.indexPage].meta.results.data[
               search.indexProfessional
            ].usuario.interacoes.push({
               tipo_id: type,
               user_id: professional_id,
               registro_id: user.id
            });
         } else {
            const professional =
               professionals.pages[search?.indexPage].meta.results.data[
                  search.indexProfessional
               ];
            const interacaoIndex = professional.usuario.interacoes.findIndex(
               (interacao) =>
                  interacao.registro_id === user.id && interacao.tipo_id == type
            );
            professionals.pages[search.indexPage].meta.results.data[
               search.indexProfessional
            ].usuario.interacoes.splice(interacaoIndex, 1);
         }
      }

      return professionals;
   }

   function onSuccessInteraction() {
      queryClient.setQueryData(
         [APP_MESSAGES.QUERIES_KEYS.QUERY_FEED],
         (oldFeed: InfiniteData<Response<ProfessionalsListResponse>>) => {
            return searchProfessional(oldFeed);
         }
      );
   }

   function changeStateInteraction() {
      setStateInteraction((oldState) => ({
         count: oldState.state ? oldState.count - 1 : oldState.count + 1,
         state: !oldState.state
      }));
   }

   useEffect(() => {
      calculateInteractions();
   }, [calculateInteractions]);

   return {
      handleClickInteraction: handleClick,
      countInteraction: stateInteraction.count,
      someInteraction: stateInteraction.state
   };
}
