import { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useFontsize } from '@hooks/shared';

import { OccupationArea } from './components/OccupationArea';
import { InformationsEmpty } from './components/InformationsEmpty';

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
   const { getFontsize } = useFontsize();

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
            style={{ fontSize: getFontsize(11) + 0.5 }}
         >
            Áreas de atuação
         </Text>
         {occupations.length ? (
            <FlatList
               data={occupations}
               renderItem={renderItem}
               keyExtractor={keyExtractor}
               ItemSeparatorComponent={() => <View className="w-2"></View>}
               horizontal
               contentContainerStyle={{ maxHeight: 140 }}
               showsHorizontalScrollIndicator={false}
            />
         ) : (
            <InformationsEmpty />
         )}
      </View>
   );
}
