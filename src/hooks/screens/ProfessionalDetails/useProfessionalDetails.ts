import { useQuery } from '@tanstack/react-query';

import { ProfessionalModel } from '@domain/models';
import { ProfessionalsService } from '@services/http/professionals.service';
import { APP_MESSAGES } from '@constants';

export function useProfessionalDetails(professional_id: string) {
   const { data, isLoading, isFetching, isError, isSuccess, refetch } =
      useQuery({
         queryKey: [
            APP_MESSAGES.QUERIES_KEYS.PROFESSIONAL_DETAILS,
            professional_id
         ],
         queryFn: () =>
            ProfessionalsService.getOneProfessional(professional_id),
         staleTime: 1000 * 60 * 10 // Data is valid for 10 minutes
      });

   return {
      professional: isSuccess ? data?.meta?.results : ({} as ProfessionalModel),
      isLoading,
      isFetching,
      isSuccess,
      isError,
      refetch
   };
}
