import { useCallback } from 'react';
import { FlashList } from '@shopify/flash-list';

import { ProfessionalSummary } from '@components/ProfessionalSummary';
import { ProfessionalModel } from '@domain/models/professional.model';
import { Loading } from '@components/Loading';
import { ProfessionalsEmpty } from './ProfessionalsEmpty';

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
      ({ item, index }) => <ProfessionalSummary data={item} index={index} />,
      []
   );
   const keyExtractor = useCallback(
      (item: ProfessionalModel) => item?.uuid,
      []
   );

   return (
      <>
         {professionals.length > 0 ? (
            <FlashList
               data={professionals}
               keyExtractor={keyExtractor}
               renderItem={renderItem}
               showsVerticalScrollIndicator={false}
               contentContainerStyle={{ paddingBottom: 40 }}
               onEndReachedThreshold={0.1}
               onEndReached={() => loadMoreData(false)}
               estimatedItemSize={350}
               ListFooterComponent={<Loading.Default loading={isFetching} />}
               ListFooterComponentStyle={{ marginBottom: 40 }}
            />
         ) : (
            <ProfessionalsEmpty
               refetch={() => loadMoreData(true)}
               isFetching={isFetching}
            />
         )}
      </>
   );
}
