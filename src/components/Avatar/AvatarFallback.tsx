import { useFontsize } from '@hooks/shared';
import { View, Text } from 'react-native';

interface AvatarFallbackProps {
   name: string;
   size: number;
}

export function AvatarFallback({ name, size }: AvatarFallbackProps) {
   const { getFontsize } = useFontsize();
   return (
      <View className="absolute bottom-0 left-0 right-0 top-0 items-center justify-center bg-gray-700">
         <Text
            className="mt-1 font-heading_md text-white"
            style={{ fontSize: getFontsize(size) }}
         >
            {name?.split('')[0]?.toUpperCase()}
            {name?.split('')[1]?.toLocaleUpperCase()}
         </Text>
      </View>
   );
}
