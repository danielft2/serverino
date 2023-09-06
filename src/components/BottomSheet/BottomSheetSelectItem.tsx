import { Text, TouchableOpacity, View } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useFontsize } from '@hooks/shared';

interface BottomSheetSelectItemProps {
   value: string;
   onPress: () => void;
}

export function BottomSheetSelectItem({
   value,
   onPress
}: BottomSheetSelectItemProps) {
   const { getFontsize } = useFontsize();
   return (
      <TouchableOpacity
         className="py-6"
         activeOpacity={0.5}
         hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
         onPress={onPress}
      >
         <View className="flex-row items-center justify-between">
            <Text
               className="text-gray-50"
               style={{ fontSize: getFontsize(13) }}
            >
               {value}
            </Text>
            <ChevronRight size={RFValue(18)} className="text-gray-50" />
         </View>
      </TouchableOpacity>
   );
}
