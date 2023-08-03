import { useCallback, useEffect, useState } from 'react';
import { FlashList } from '@shopify/flash-list';

import { ProfessionalSummary } from '@components/ProfessionalSummary';
import { Loading } from '@components/Loading';
import { ProfessionalModel } from '@domain/models/professional.model';

import { FeedEmpty } from './FeedEmpty';

interface FeedPreviewProps {
   isFetching: boolean;
   professionals: ProfessionalModel[];
   loadMoreData: (refetch: boolean) => void;
}

export function FeedPreview({
   isFetching,
   professionals,
   loadMoreData
}: FeedPreviewProps) {
   const [isRefresh, setIsRefresh] = useState(false);

   const renderItem = useCallback(
      ({ item, index }) => <ProfessionalSummary data={item} index={index} />,
      []
   );
   const keyExtractor = useCallback(
      (item: ProfessionalModel) => item?.uuid,
      []
   );

   function onRefreshFeed() {
      setIsRefresh(true);
      loadMoreData(true);
   }

   useEffect(() => {
      if (!isFetching && isRefresh) setIsRefresh(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isFetching]);

   return (
      <>
         {professionals.length ? (
            <FlashList
               data={professionals}
               keyExtractor={keyExtractor}
               renderItem={renderItem}
               showsVerticalScrollIndicator={false}
               contentContainerStyle={{ paddingBottom: 40 }}
               onEndReachedThreshold={0.1}
               onEndReached={() => loadMoreData(false)}
               refreshing={isRefresh}
               onRefresh={onRefreshFeed}
               estimatedItemSize={400}
               ListFooterComponent={<Loading.Default loading={isFetching} />}
               ListFooterComponentStyle={{ marginBottom: 40 }}
            />
         ) : (
            <FeedEmpty
               refetch={() => loadMoreData(true)}
               isFetching={isFetching}
            />
         )}
      </>
   );
}
