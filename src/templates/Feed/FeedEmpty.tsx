import { useEffect, useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { Button } from '@components/Button';
import { useFontsize } from '@hooks/shared';
import { useSessionStore } from '@store/session';
import Worker from '@assets/ilustrations/worker.svg';

interface FeedEmptyProps {
   isFetching: boolean;
   refetch: () => void;
}

export function FeedEmpty({ isFetching, refetch }: FeedEmptyProps) {
   const [refreshing, setRefreshing] = useState(false);

   const user = useSessionStore((state) => state.user);
   const { getFontsize } = useFontsize();

   function onRefreshFeed() {
      setRefreshing(true);
      refetch();
   }

   useEffect(() => {
      if (!isFetching && refreshing) setRefreshing(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isFetching]);

   return (
      <ScrollView
         contentContainerStyle={{ flex: 1 }}
         refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefreshFeed} />
         }
      >
         <View className="items-center" style={{ height: RFPercentage(75) }}>
            <View className="flex-1 items-center justify-center space-y-4 px-4">
               <View className="items-center">
                  <Worker width={RFValue(180)} height={RFValue(158)} />
                  <Text
                     className="text-center font-heading_sm text-white"
                     style={{ fontSize: getFontsize(14) }}
                  >
                     {`Ainda não existe nenhum profissional cadastrado em ${user.cidade.nome} - ${user.cidade.uf.nome}`}
                  </Text>
                  <Text
                     className="text-gray-100"
                     style={{ fontSize: getFontsize(13) }}
                  >
                     Tente atualizar o feed ou indique um profissional.
                  </Text>
               </View>
               <Button.Root weigth="auto">
                  <Button.Text>Indicar Professional</Button.Text>
               </Button.Root>
            </View>
         </View>
      </ScrollView>
   );
}
