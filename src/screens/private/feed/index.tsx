import { SafeAreaView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { ProfessionalsListSkeleton } from '@components/ui/skeletons/professionals-list';
import { SomethingWrong } from '@components/Errors';
import Logo from '@assets/logo.svg';

import { useFetchFeed } from './hooks/use-fetch-feed';
import { FeedPreview } from './components/feed-preview';

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
  } = useFetchFeed();

  const statusBarHeigth = getStatusBarHeight();

  function loadMoreProfessionals(update: boolean) {
    if (update) refresh();
    else if (hasNextPage) fetchNextPage();
  }

  const profressionals = data?.pages.flatMap((page) => page?.meta.results.data);

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
        <ProfessionalsListSkeleton />
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