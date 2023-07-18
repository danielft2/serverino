import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { ProfessionalSkeleton } from '@components/ProfessionalSummary/ProfessionalSkeleton';
import { ProfessionalsPreview } from '@templates/Feed/ProfessionalsPreview';
import { useAuth } from '@hooks/shared';
import { useFeed } from '@hooks/screens';
import Logo from '@assets/logo.svg';

export function Feed() {
   const { refreshToken } = useAuth();
   const statusBarHeigth = getStatusBarHeight();
   const { data, isLoading, isFetching, hasNextPage, fetchNextPage, refetch } =
      useFeed();

   function loadMoreProfessionals(refetch: boolean) {
      if (refetch) {
         fetchNextPage({ pageParam: 1 });
      } else if (hasNextPage) fetchNextPage();
   }

   const profressionals = data?.pages.flatMap(
      (page) => page?.meta.results.data
   );

   useEffect(() => {
      if (refreshToken) refetch();
   }, [refreshToken, refetch]);

   return (
      <SafeAreaView
         className="flex-1 bg-blue_dark-900"
         style={{ paddingTop: statusBarHeigth }}
      >
         <Logo
            width={RFValue(100)}
            height={RFValue(40)}
            className="mb-3 mr-2 self-center"
         />
         {isLoading ? (
            <ProfessionalSkeleton />
         ) : (
            <ProfessionalsPreview
               professionals={profressionals.length ? profressionals : []}
               isFetching={isFetching}
               loadMoreData={loadMoreProfessionals}
            />
         )}
      </SafeAreaView>
   );
}
