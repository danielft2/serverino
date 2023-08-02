import { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { OccupationArea } from './components/OccupationArea';

interface ProfessionalOccupationsProps {
   occupations: {
      id: number;
      titulo: string;
      descricao: string;
   }[];
}

export function ProfessionalOccupations({
   occupations
}: ProfessionalOccupationsProps) {
   const renderItem = useCallback(
      ({ item }) => (
         <OccupationArea name={item.titulo} description={item.descricao} />
      ),
      []
   );
   const keyExtractor = useCallback((item: any) => item?.id, []);

   return (
      <View className="mb-6">
         <Text
            className="mb-1 font-heading_md text-gray-100"
            style={{ fontSize: RFValue(11) + 0.5 }}
         >
            Áreas de atuação
         </Text>
         <FlatList
            data={occupations}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={() => <View className="w-2"></View>}
            horizontal
            contentContainerStyle={{ maxHeight: 140 }}
            showsHorizontalScrollIndicator={false}
         />
      </View>
   );
}
