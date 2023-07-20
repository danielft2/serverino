import { useCallback, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { InteractionProfessionalDTO } from '@domain/dtos/interaction';
import { ProfessionalsService } from '@services/http/professionals.service';

import { useSession } from './useSession';

interface useProfessionalProps {
   type: number;
   user_id: number;
   interactions: {
      tipo_id: number;
      registro_id: number;
   }[];
}

export function useProfessional({
   type,
   interactions,
   user_id
}: useProfessionalProps) {
   const [stateInteraction, setStateInteraction] = useState({
      count: 0,
      state: false
   });
   const { user } = useSession();

   const { mutateAsync: interactionProfessional } = useMutation({
      mutationKey: ['interactionProfessional'],
      mutationFn: ({ user_id, tipo_id }: InteractionProfessionalDTO) =>
         ProfessionalsService.interactionProfessional({ tipo_id, user_id }),
      onError: () => {
         setStateInteraction((oldState) => ({
            count: oldState.state ? oldState.count - 1 : oldState.count + 1,
            state: !oldState.state
         }));
      }
   });

   async function handleClick() {
      setStateInteraction((oldState) => ({
         count: oldState.state ? oldState.count - 1 : oldState.count + 1,
         state: !oldState.state
      }));
      interactionProfessional({ tipo_id: type, user_id });
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

   useEffect(() => {
      calculateInteractions();
   }, [calculateInteractions]);

   return {
      handleClickInteraction: handleClick,
      countInteraction: stateInteraction.count,
      someInteraction: stateInteraction.state
   };
}
