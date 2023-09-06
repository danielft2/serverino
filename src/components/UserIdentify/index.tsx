import { View, Text } from 'react-native';

import { useFontsize } from '@hooks/shared';

interface UserIdentifyProps {
   name: string;
   description: string;
}

export function UserIdentify({ name, description }: UserIdentifyProps) {
   const { getFontsize } = useFontsize();

   return (
      <View className="mt-1 items-center">
         <Text
            className="font-heading_sm text-green-400"
            style={{ fontSize: getFontsize(13) }}
         >
            {description}
         </Text>
         <Text
            className="-mt-[6px] font-heading_sm text-white"
            style={{ fontSize: getFontsize(15) }}
         >
            {name}
         </Text>
      </View>
   );
}
