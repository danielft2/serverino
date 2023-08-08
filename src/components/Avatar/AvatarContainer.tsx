import { ReactNode, useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Loading } from '@components/Loading';

import { theme } from '../../theme';

interface AvatarContainerProps {
   size?: number;
   border?: string;
   source: string;
   hasLoading?: boolean;
   isLoading?: boolean;
   children?: ReactNode;
}

export function AvatarContainer({
   size = 20,
   source,
   border = 'border-green-400',
   hasLoading = false,
   isLoading = false,
   children
}: AvatarContainerProps) {
   const [isErrorImage, setIsErrorImage] = useState(false);
   const [loadingImage, setLoadingImage] = useState(false);

   useEffect(() => {
      if (source || isLoading) setIsErrorImage(false);
   }, [source, isLoading]);

   return (
      <View
         className={`relative overflow-hidden rounded-full border-[1.8px]
         ${border} bg-blue_dark-600`}
         style={{ width: RFValue(size), height: RFValue(size) }}
      >
         {!isErrorImage && !isLoading && (
            <Image
               source={{ uri: source ? source : 'https://wwww' }}
               className="h-full w-full object-cover"
               onError={() => setIsErrorImage(true)}
               onLoadStart={() => setLoadingImage(true)}
               onLoadEnd={() => setLoadingImage(false)}
            />
         )}
         {hasLoading && (
            <View className="absolute left-[38%] top-[38%]">
               <Loading.Default
                  loading={loadingImage || isLoading}
                  size={30}
                  color={theme.colors.white}
               />
            </View>
         )}
         {isErrorImage && children}
      </View>
   );
}
