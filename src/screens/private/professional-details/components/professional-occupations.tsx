import { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';

import { useFontsize } from '@hooks';

import { OccupationArea } from './occupation-area';
import { InformationsEmpty } from './informations-empty';

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
      <OccupationArea
        name={item.titulo}
        description={item.descricao}
        isOnly={occupations.length === 1}
      />
    ),
    [occupations.length]
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
