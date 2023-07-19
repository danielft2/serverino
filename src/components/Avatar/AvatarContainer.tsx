import { View } from 'react-native';
import { Image } from 'expo-image';
import { RFValue } from 'react-native-responsive-fontsize';
import { ReactNode, useState } from 'react';

interface AvatarContainerProps {
   size?: number;
   border?: string;
   children?: ReactNode;
   source: string;
}

export function AvatarContainer({
   size = 20,
   children,
   source,
   border = 'border-green-400'
}: AvatarContainerProps) {
   const [isErrorImage, setIsErrorImage] = useState(false);
   return (
      <View
         className={`relative overflow-hidden rounded-full border-[1.5px]
         ${border} bg-blue_dark-600`}
         style={{ width: RFValue(size), height: RFValue(size) }}
      >
         {!isErrorImage && (
            <Image
               source={{ uri: source }}
               className="h-full w-full"
               contentFit="cover"
               onError={() => setIsErrorImage(true)}
            />
         )}
         {isErrorImage && children}
      </View>
   );
}
