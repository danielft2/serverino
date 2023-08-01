import { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ServiceLocation } from './components/ServiceLocation';

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
            style={{ fontSize: RFValue(11) + 0.5 }}
         >
            Locais de Atendimentos
         </Text>
         <FlatList
            data={services}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={() => <View className="w-2"></View>}
            contentContainerStyle={{ maxHeight: 56 }}
            horizontal
            showsHorizontalScrollIndicator={false}
         />
      </View>
   );
}
