import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

import { ProfessionalsService } from '@services/professionals.service';
import { APP_CONSTANTS } from '@constants';
import { queryClient } from '@lib/react-query';
import { AreaModel } from '@domain/models/area.model';
import { Response } from '@services/responses';
import { DiscoveryStorage } from '@storage/discovery';

export function useProfessionalAreas() {
   const { refetch } = useQuery({
      queryKey: [APP_CONSTANTS.QUERIES_KEYS.PROFESSIONALS_AREAS],
      queryFn: ProfessionalsService.getAllAreas,
      select: (data) =>
         data.meta.results
            .map((area) => ({
               label: area.nome,
               value: area.id.toString()
            }))
            .sort(),
      enabled: false,
      staleTime: Infinity
   });

   const fetchAreas = useCallback(() => {
      refetch();
      DiscoveryStorage.clearAreaSelected();
   }, [refetch]);

   const getAreas = () => {
      const areas = queryClient.getQueryData<Response<AreaModel[]>>([
         APP_CONSTANTS.QUERIES_KEYS.PROFESSIONALS_AREAS
      ]).meta.results;

      return areas
         .map((area) => ({
            label: area.nome,
            value: area.id.toString()
         }))
         .sort();
   };

   return {
      fetchAreas,
      getAreas
   };
}
