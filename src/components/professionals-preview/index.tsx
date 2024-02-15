import { ReactNode, useCallback, useEffect, useState } from 'react';
import { FlashList } from '@shopify/flash-list';

import { ProfessionalSummary } from '@components/professional-summary';
import { Loading } from '@components/ui/loading';
import { ProfessionalsListSkeleton } from '@components/ui/skeletons/professionals-list';
import { ProfessionalModel } from '@domain/models/professional-model';

interface ProfessionalsPreviewProps {
  isFeed?: boolean;
  isFetching: boolean;
  isLoading: boolean;
  areaId?: string;
  professionals: ProfessionalModel[];
  previewEmpty: ReactNode;
  onEndReached: (refetch?: boolean) => void;
}

export function ProfessionalsPreview({
  isFetching,
  isLoading,
  areaId,
  professionals = [],
  previewEmpty,
  onEndReached
}: ProfessionalsPreviewProps) {
  const [isRefresh, setIsRefresh] = useState(false);

  const renderItem = useCallback(
    ({ item, index }) => (
      <ProfessionalSummary areaId={areaId} data={item} index={index} />
    ),
    [areaId]
  );
  const keyExtractor = useCallback((item: ProfessionalModel) => item.uuid, []);

  function onRefreshFeed() {
    setIsRefresh(true);
    onEndReached(true);
  }

  useEffect(() => {
    if (!isFetching && isRefresh) setIsRefresh(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  return (
    <>
      {isLoading && isFetching ? (
        <ProfessionalsListSkeleton />
      ) : professionals.length ? (
        <FlashList
          data={professionals}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          onEndReachedThreshold={0.1}
          onEndReached={onEndReached}
          refreshing={isRefresh}
          onRefresh={onRefreshFeed}
          estimatedItemSize={400}
          ListFooterComponent={<Loading.Default loading={isFetching} />}
          ListFooterComponentStyle={{ marginBottom: 40 }}
        />
      ) : (
        previewEmpty
      )}
    </>
  );
}
