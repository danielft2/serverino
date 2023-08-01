import { View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface UserIdentifyProps {
   name: string;
   description: string;
}

export function UserIdentify({ name, description }: UserIdentifyProps) {
   return (
      <View className="mt-1 items-center">
         <Text
            className="font-heading_sm text-green-400"
            style={{ fontSize: RFValue(13) }}
         >
            {description}
         </Text>
         <Text
            className="-mt-[6px] font-heading_sm text-white"
            style={{ fontSize: RFValue(15) }}
         >
            {name}
         </Text>
      </View>
   );
}
