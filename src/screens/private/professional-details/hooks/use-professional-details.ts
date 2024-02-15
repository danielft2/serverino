import { useQuery } from '@tanstack/react-query';

import { ProfessionalsService } from '@services/professional/professional-service';
import { ProfessionalModel } from '@services/professional/models';
import { APP_CONSTANTS } from '@constants';

export function useProfessionalDetails(professional_id: string) {
  const { data, isLoading, isFetching, isError, isSuccess, refetch } = useQuery(
    {
      queryKey: [
        APP_CONSTANTS.QUERIES_KEYS.PROFESSIONAL_DETAILS,
        professional_id
      ],
      queryFn: ({ signal }) =>
        ProfessionalsService.getOneProfessional(professional_id, signal),
      staleTime: 1000 * 60 * 10 // Data is valid for 10 minutes
    }
  );

  return {
    professional: isSuccess ? data?.meta?.results : ({} as ProfessionalModel),
    isLoading,
    isFetching,
    isSuccess,
    isError,
    refetch
  };
}