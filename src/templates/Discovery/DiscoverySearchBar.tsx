import { View, Text, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Search } from 'lucide-react-native';

import { useFontsize } from '@hooks/shared';

export function DiscoverySearchBar() {
   const { getFontsize } = useFontsize();
   return (
      <View className="flex-row justify-between space-x-3">
         <View className="h-12 flex-grow justify-center rounded-full bg-blue_dark-500 px-6">
            <Text
               className="text-gray-50"
               style={{ fontSize: getFontsize(13) }}
               numberOfLines={1}
            >
               Busque por uma área ao lado
            </Text>
         </View>
         <TouchableOpacity className="h-12 w-12 items-center justify-center rounded-full bg-blue_dark-500">
            <Search size={RFValue(20)} className="text-white" />
         </TouchableOpacity>
      </View>
   );
}
