import { useCallback, useEffect, useState } from 'react';

import { InteractionTypes } from '@domain/types';
import { useSession } from '@hooks/shared';

interface UseProfessionalProps {
   interactions: {
      tipo_id: number;
      registro_id: number;
   }[];
}

export function useProfessional({ interactions }: UseProfessionalProps) {
   const [likeInteractions, setLikeInteractions] = useState({
      count: 0,
      interactionMine: false
   });
   const [recommendsInteractions, setRecommendsInteractions] = useState({
      count: 0,
      interactionMine: false
   });

   const { user } = useSession();

   const calculateInteractions = useCallback(() => {
      const likes = { count: 0, someInteraction: false };
      const recommends = { count: 0, someInteraction: false };

      interactions.forEach((item) => {
         if (item.tipo_id == InteractionTypes.LIKE) {
            if (item.registro_id === user.id) likes.someInteraction = true;
            likes.count++;
         } else if (item.tipo_id == InteractionTypes.RECOMMEND) {
            if (item.registro_id === user.id) recommends.someInteraction = true;
            recommends.count++;
         }
      });

      setLikeInteractions({
         count: likes.count,
         interactionMine: likes.someInteraction
      });
      setRecommendsInteractions({
         count: recommends.count,
         interactionMine: recommends.someInteraction
      });
   }, [interactions, user.id]);

   function updateInteractions() {
      calculateInteractions();
   }

   useEffect(() => {
      calculateInteractions();
   }, [calculateInteractions]);

   return {
      likeInteractions,
      recommendsInteractions,
      updateInteractions
   };
}
