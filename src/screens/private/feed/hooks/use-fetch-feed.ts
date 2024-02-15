import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { queryClient } from '@libs/react-query';
import { useSession } from '@hooks';
import { APP_CONSTANTS } from '@constants';
import { ProfessionalsService } from '@services/professional/professional-service';

export function useFetchFeed() {
  const { user } = useSession();

  const {
    data,
    fetchNextPage,
    refetch,
    isLoading,
    isFetching,
    isError,
    hasNextPage
  } = useInfiniteQuery([APP_CONSTANTS.QUERIES_KEYS.QUERY_FEED], {
    queryFn: ({ pageParam, signal }) => {
      return ProfessionalsService.getAllProfessionals(
        user.cidade.id,
        pageParam,
        signal
      );
    },
    getNextPageParam: (lastpage) =>
      lastpage?.meta?.results.next_page_url?.split('=')[1],
    staleTime: Infinity,
    notifyOnChangeProps: ['data', 'isError', 'isFetching', 'isLoading']
  });

  function refresh() {
    queryClient.resetQueries({
      queryKey: [APP_CONSTANTS.QUERIES_KEYS.QUERY_FEED],
      exact: true
    });
  }

  useEffect(() => {
    if (user.cidade.id) refetch();
  }, [user.cidade.id, refetch]);

  return {
    data,
    isLoading,
    isFetching,
    isError,
    hasNextPage,
    fetchNextPage,
    refetch,
    refresh
  };
}
