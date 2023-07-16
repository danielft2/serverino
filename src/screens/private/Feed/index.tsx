import { SafeAreaView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { useProfessionals } from '@hooks/shared/useProfessionals';
import { ProfessionalsPreview } from '@templates/Feed/ProfessionalsPreview';
import Logo from '@assets/logo.svg';
import { ProfessionalSkeleton } from '@components/ProfessionalSummary/ProfessionalSkeleton';

export function Feed() {
   const statusBarHeigth = getStatusBarHeight();
   const { data, isLoading, isFetching, hasNextPage, fetchNextPage } =
      useProfessionals();

   function loadMoreProfessionals(refetch: boolean) {
      if (refetch) {
         fetchNextPage({ pageParam: 1 });
      } else if (hasNextPage) fetchNextPage();
   }

   const profressionals = data?.pages.flatMap((page) => page.meta.results.data);

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
               professionals={profressionals}
               isFetching={isFetching}
               loadMoreData={loadMoreProfessionals}
            />
         )}
      </SafeAreaView>
   );
}
