import { ReactNode } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ProfessionalActionIconProps {
   children: ReactNode;
   label?: string;
   onPress: () => void;
}

export function ProfessionalActionIcon({
   children,
   label,
   onPress
}: ProfessionalActionIconProps) {
   return (
      <TouchableOpacity
         onPress={onPress}
         hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
      >
         <View className="flex-row items-center space-x-2">
            {children}
            <Text
               className="mt-[1px] font-heading_md text-white"
               style={{ fontSize: RFValue(11) }}
            >
               {label}
            </Text>
         </View>
      </TouchableOpacity>
   );
}
