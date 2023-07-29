import { useInfiniteQuery } from '@tanstack/react-query';
import { ProfessionalsService } from '@services/http/professionals.service';
import { useSession } from '@hooks/shared';

export function useFeed() {
   const { user } = useSession();

   const {
      data,
      fetchNextPage,
      refetch,
      isLoading,
      isFetching,
      isError,
      hasNextPage
   } = useInfiniteQuery(['professionalsFeed'], {
      queryFn: ({ pageParam }) =>
         ProfessionalsService.getAllProfessionals(user.cidade.id, pageParam),
      getNextPageParam: (lastpage) =>
         lastpage?.meta?.results.next_page_url?.split('=')[1],
      staleTime: Infinity
   });

   return {
      data,
      isLoading,
      isFetching,
      isError,
      hasNextPage,
      fetchNextPage,
      refetch
   };
}
