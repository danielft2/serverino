import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

import { ProfessionalsService } from '@services/professional/professional-service';
import { APP_CONSTANTS } from '@constants';
import { queryClient } from '@libs/react-query';
import { AreaModel } from '@services/professional/models/area-model';
import { DiscoveryStorage } from '@storage/discovery-storage';
import { Response } from '../@types/api-response';

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
