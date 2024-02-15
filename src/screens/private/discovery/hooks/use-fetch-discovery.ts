import { useInfiniteQuery } from '@tanstack/react-query';

import { APP_CONSTANTS } from '@constants';
import { ProfessionalsService } from '@services/professional/professional-service';
import { queryClient } from '@libs/react-query';

interface UseDiscoveryProps {
  area_id: string;
}

export function useFetchDiscovery({ area_id = '-1' }: UseDiscoveryProps) {
  const { data, isLoading, isError, isFetching, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: [APP_CONSTANTS.QUERIES_KEYS.PROFESSIONAL_BY_AREA, area_id],
      queryFn: ({ pageParam, signal }) => {
        return ProfessionalsService.getAllProfessionalByArea(
          pageParam,
          parseInt(area_id),
          signal
        );
      },
      getNextPageParam: (lastpage) =>
        lastpage?.meta?.results.next_page_url?.split('=')[1],
      staleTime: Infinity
    });

  function refresh() {
    queryClient.resetQueries({
      queryKey: [APP_CONSTANTS.QUERIES_KEYS.PROFESSIONAL_BY_AREA, area_id],
      exact: true
    });
  }

  return {
    data,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    refresh,
    isError
  };
}
