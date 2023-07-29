import { SafeAreaView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { ProfessionalSkeleton } from '@components/ProfessionalSummary/ProfessionalSkeleton';
import { ProfessionalsPreview } from '@templates/Feed/ProfessionalsPreview';
import { useFeed } from '@hooks/screens';
import Logo from '@assets/logo.svg';

export function Feed() {
   const { data, isLoading, isFetching, hasNextPage, refetch, fetchNextPage } =
      useFeed();

   const statusBarHeigth = getStatusBarHeight();

   function loadMoreProfessionals(update: boolean) {
      if (update) refetch();
      else if (hasNextPage) fetchNextPage();
   }

   const profressionals = data?.pages.flatMap(
      (page) => page?.meta.results.data
   );

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
         {isLoading && isFetching ? (
            <ProfessionalSkeleton />
         ) : (
            <ProfessionalsPreview
               professionals={profressionals?.length ? profressionals : []}
               isFetching={isFetching}
               loadMoreData={loadMoreProfessionals}
            />
         )}
      </SafeAreaView>
   );
}
