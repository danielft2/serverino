import { ReactNode, useState } from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Image } from 'expo-image';

import { Loading } from '@components/Loading';

import { theme } from '../../theme';

interface AvatarContainerProps {
   size?: number;
   border?: string;
   source: string;
   isLoading?: boolean;
   children?: ReactNode;
}

export function AvatarContainer({
   size = 20,
   source,
   border = 'border-green-400',
   isLoading = false,
   children
}: AvatarContainerProps) {
   const [isErrorImage, setIsErrorImage] = useState(false);
   const [loadingImage, setLoadingImage] = useState(true);
   return (
      <View
         className={`relative items-center justify-center overflow-hidden rounded-full border-[1.5px]
         ${border} bg-blue_dark-600`}
         style={{ width: RFValue(size), height: RFValue(size) }}
      >
         {!isErrorImage && (
            <Image
               source={{ uri: source }}
               className="h-full w-full"
               contentFit="cover"
               onError={() => setIsErrorImage(true)}
               onLoadEnd={() => setLoadingImage(false)}
            />
         )}
         {isLoading && (
            <Loading.Default
               loading={loadingImage}
               size={30}
               color={theme.colors.white}
            />
         )}
         {isErrorImage && children}
      </View>
   );
}
