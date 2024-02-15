import { View, Text } from 'react-native';
import { Frown } from 'lucide-react-native';

import { useFontsize } from '@hooks';

export function InformationsEmpty() {
  const { getFontsize } = useFontsize();

  return (
    <View className="rounded-md bg-blue_dark-600 p-4">
      <View className="flex-row items-center justify-center space-x-2">
        <Frown size={getFontsize(18)} className="text-gray-100" />
        <Text className="text-gray-100" style={{ fontSize: getFontsize(12) }}>
          Nenhuma informação econtrada.
        </Text>
      </View>
    </View>
  );
}
