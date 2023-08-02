import { SafeAreaView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { ProfessionalSkeleton } from '@components/ProfessionalSummary/ProfessionalSkeleton';
import { FeedPreview } from '@templates/Feed';
import { SomethingWrong } from '@templates/Errors';
import { useFeed } from '@hooks/screens';
import Logo from '@assets/logo.svg';

export function Feed() {
   const {
      data,
      isLoading,
      isFetching,
      isError,
      hasNextPage,
      refetch,
      refresh,
      fetchNextPage
   } = useFeed();

   const statusBarHeigth = getStatusBarHeight();

   function loadMoreProfessionals(update: boolean) {
      if (update) refresh();
      else if (hasNextPage) fetchNextPage();
   }

   const profressionals = data?.pages.flatMap(
      (page) => page?.meta.results.data
   );

   if (isError) return <SomethingWrong onTryAgain={refetch} />;

   return (
      <SafeAreaView
         className="flex-1 bg-blue_dark-900"
         style={{ paddingTop: statusBarHeigth }}
      >
         <Logo
            width={RFValue(110)}
            height={RFValue(40)}
            className="mb-3 mr-2 self-center"
         />
         {isLoading && isFetching ? (
            <ProfessionalSkeleton />
         ) : (
            <FeedPreview
               professionals={profressionals?.length ? profressionals : []}
               isFetching={isFetching}
               loadMoreData={loadMoreProfessionals}
            />
         )}
      </SafeAreaView>
   );
}
