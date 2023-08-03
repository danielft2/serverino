import React from 'react';
import { View, Text } from 'react-native';
import { Frown } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export function InformationsEmpty() {
   return (
      <View className="rounded-md bg-blue_dark-600 p-4">
         <View className="flex-row items-center justify-center space-x-2">
            <Frown size={RFValue(18)} className="text-gray-100" />
            <Text className="text-gray-100" style={{ fontSize: RFValue(12) }}>
               Nenhuma informação econtrada.
            </Text>
         </View>
      </View>
   );
}
