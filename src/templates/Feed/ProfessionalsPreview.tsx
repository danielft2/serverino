import { useCallback } from 'react';
import { FlashList } from '@shopify/flash-list';

import { ProfessionalSummary } from '@components/ProfessionalSummary';
import { ProfessionalModel } from '@domain/models/professional.model';
import { Loading } from '@components/Loading';

interface ProfessionalsPreviewProps {
   isFetching: boolean;
   professionals: ProfessionalModel[];
   loadMoreData: (refetch: boolean) => void;
}

export function ProfessionalsPreview({
   isFetching,
   professionals,
   loadMoreData
}: ProfessionalsPreviewProps) {
   const renderItem = useCallback(
      ({ item }) => <ProfessionalSummary data={item} />,
      []
   );
   const keyExtractor = useCallback(
      (item: ProfessionalModel) => item?.uuid,
      []
   );

   return (
      <FlashList
         data={professionals}
         keyExtractor={keyExtractor}
         renderItem={renderItem}
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{ paddingBottom: 40 }}
         onEndReachedThreshold={0}
         onEndReached={() => loadMoreData(false)}
         estimatedItemSize={348}
         ListFooterComponent={<Loading.Default loading={isFetching} />}
         ListFooterComponentStyle={{ marginBottom: 40 }}
      />
   );
}
