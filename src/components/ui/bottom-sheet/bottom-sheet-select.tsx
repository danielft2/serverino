import { useCallback, useMemo, useState } from 'react';
import { View, TextInput } from 'react-native';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { Search } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../../theme';
import { BottomSheetSelectItem } from './bottom-sheet-select-item';
import { Loading } from '@components/ui/loading';
import { ItemSelect } from '@domain/types';

interface BottomSheetSelectProps {
  data: ItemSelect[];
  isLoading: boolean;
  onChange: (value: ItemSelect) => void;
}

export function BottomSheetSelect({
  data,
  isLoading,
  onChange
}: BottomSheetSelectProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const keyExtractor = useCallback((item: any) => item.value, []);

  const renderItem = useCallback(
    ({ item }) => (
      <BottomSheetSelectItem
        value={item.label}
        onPress={() => onChange(item)}
      />
    ),
    [onChange]
  );

  const areas = useMemo(
    () =>
      searchTerm.length > 0
        ? data.filter((item) => item.label.includes(searchTerm))
        : data,
    [data, searchTerm]
  );

  return (
    <View className="flex-1 space-y-3 p-3">
      <View className="relative">
        <TextInput
          className="h-12 w-full rounded-full bg-blue_dark-300 px-4 text-gray-50"
          placeholder="Pesquise uma área"
          placeholderTextColor={theme.colors.gray[100]}
          onChangeText={setSearchTerm}
        />
        <Search
          size={RFValue(20)}
          className="absolute right-6 top-[30%] text-green-400"
        />
      </View>
      {isLoading ? (
        <View className="flex-1 justify-center">
          <Loading.Default size={32} />
        </View>
      ) : (
        <BottomSheetFlatList
          data={areas}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View className="h-[1px] w-full bg-blue_dark-300"></View>
          )}
        />
      )}
    </View>
  );
}
