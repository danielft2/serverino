import { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';

import { useFontsize } from '@hooks/shared';

import { ServiceLocation } from './components/ServiceLocation';
import { InformationsEmpty } from './components/InformationsEmpty';

interface ProfessionalServiceLocationsProps {
   services: {
      id: number;
      nome: string;
      uf: string;
   }[];
}

export function ProfessionalServiceLocations({
   services
}: ProfessionalServiceLocationsProps) {
   const { getFontsize } = useFontsize();

   const renderItem = useCallback(
      ({ item }) => (
         <ServiceLocation locationName={`${item.nome} - ${item.uf}`} />
      ),
      []
   );
   const keyExtractor = useCallback((item: any) => item?.id, []);

   return (
      <View className="w-full">
         <Text
            className="mb-1 font-heading_md text-gray-100"
            style={{ fontSize: getFontsize(11) + 0.5 }}
         >
            Locais de Atendimentos
         </Text>
         {services.length ? (
            <FlatList
               data={services}
               renderItem={renderItem}
               keyExtractor={keyExtractor}
               ItemSeparatorComponent={() => <View className="w-2"></View>}
               contentContainerStyle={{ maxHeight: 56 }}
               horizontal
               showsHorizontalScrollIndicator={false}
            />
         ) : (
            <InformationsEmpty />
         )}
      </View>
   );
}
