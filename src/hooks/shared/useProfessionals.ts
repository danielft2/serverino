import { useInfiniteQuery } from '@tanstack/react-query';
import { ProfessionalsService } from '@services/http/professionals.service';

import { useAuth } from './useAuth';
import { useToast } from './useToast';

export function useProfessionals() {
   const { user } = useAuth();
   const { showErrorMessage } = useToast();

   const { data, fetchNextPage, isLoading, isFetching, hasNextPage } =
      useInfiniteQuery(['professionalsFeed'], {
         queryFn: ({ pageParam }) =>
            ProfessionalsService.getAllProfessionals(user.cidade.id, pageParam),
         getNextPageParam: (lastpage) =>
            lastpage.meta.results.next_page_url?.split('=')[1],
         onError: () => showErrorMessage('Ocorreu um erro inesperado'),
         staleTime: Infinity
      });

   return {
      data,
      isLoading,
      isFetching,
      hasNextPage,
      fetchNextPage
   };
}
