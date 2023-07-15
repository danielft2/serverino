import { View } from 'react-native';
import { Image } from 'expo-image';
import { RFValue } from 'react-native-responsive-fontsize';
import { ReactNode, useState } from 'react';

interface AvatarRootProps {
   size?: number;
   children?: ReactNode;
   source: string;
}

export function AvatarRoot({ size = 20, children, source }: AvatarRootProps) {
   const [isErrorImage, setIsErrorImage] = useState(false);
   return (
      <View
         className="relative overflow-hidden rounded-full border
         border-green-400 bg-blue_dark-600"
         style={{ width: RFValue(size), height: RFValue(size) }}
      >
         {!isErrorImage && (
            <Image
               source={source}
               className="h-full w-full"
               contentFit="cover"
               onError={() => setIsErrorImage(true)}
            />
         )}
         {isErrorImage && children}
      </View>
   );
}
