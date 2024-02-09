import { useMemo, useRef, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import { ItemSelect } from '@domain/types';
import { BottomSheet } from '@components/BottomSheet';
import { ProfessionalsPreview } from '@components/ProfessionalsPreview';
import { DiscoveryIntro, DiscoverySearchBar } from '@templates/Discovery';
import { useProfessionalAreas } from '@hooks/shared';
import { useDiscovery } from '@hooks/screens';
import Logo from '@assets/logo.svg';
import { SomethingWrong } from '@templates/Errors';

export function Discovery() {
   const [areaSelected, setAreaSelected] = useState<ItemSelect | null>(null);

   const { getAreas } = useProfessionalAreas();
   const {
      data,
      isLoading,
      isError,
      isFetching,
      hasNextPage,
      refresh,
      fetchNextPage
   } = useDiscovery({ area_id: areaSelected?.value });

   const bottomRef = useRef<BottomSheetModalMethods>(null);
   const statusBarHeigth = getStatusBarHeight();

   function verifyLoadMoreProfessionals(update = false) {
      if (update) refresh();
      else if (hasNextPage) fetchNextPage();
   }

   const profressionals = useMemo(
      () => data?.pages?.flatMap((page) => page?.meta.results.data),
      [data]
   );

   function onChangeArea(area: ItemSelect) {
      bottomRef.current?.dismiss();
      setTimeout(() => setAreaSelected(area), 300);
   }

   if (isError) return <SomethingWrong onTryAgain={refresh} />;

   return (
      <SafeAreaView
         className="relative flex-1"
         style={{ paddingTop: statusBarHeigth }}
      >
         <Logo
            width={RFValue(110)}
            height={RFValue(40)}
            className="mb-3 mr-2 self-center"
         />
         <View className="flex-1">
            <View className="mb-6">
               <DiscoverySearchBar
                  onSearch={() => bottomRef.current?.present()}
                  placeholder={areaSelected?.label}
               />
            </View>
            <ProfessionalsPreview
               areaId={areaSelected?.value}
               isFetching={isFetching}
               isLoading={isLoading && !!areaSelected}
               professionals={profressionals}
               onEndReached={verifyLoadMoreProfessionals}
               previewEmpty={<DiscoveryIntro />}
            />
         </View>
         <BottomSheet.Root
            ref={bottomRef}
            onDismiss={() => bottomRef.current?.close()}
         >
            <BottomSheet.Select
               data={getAreas()}
               isLoading={false}
               onChange={onChangeArea}
            />
         </BottomSheet.Root>
      </SafeAreaView>
   );
}
