import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';
import { Skeleton } from 'moti/skeleton';

import { SkeletonColors } from '@utils';

interface ImageLoadingProps {
   imageUrl: string;
}

export function ImageLoading({ imageUrl }: ImageLoadingProps) {
   const [isLoading, setIsLoading] = useState(true);
   const [isError, setIsError] = useState(false);

   useEffect(() => {
      if (imageUrl && isError) setIsError(false);
      if (imageUrl) setIsLoading(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [imageUrl]);

   return (
      <View className="relative h-full w-full">
         {!isError && (
            <Image
               source={{ uri: imageUrl ?? 'https://' }}
               className="h-full w-full object-cover"
               onLoadEnd={() => setIsLoading(false)}
               onError={() => setIsError(true)}
            />
         )}
         {isLoading && (
            <Animated.View
               className="absolute bottom-0 left-0 right-0 top-0"
               exiting={FadeOut.delay(50)}
            >
               <Skeleton
                  width={'100%'}
                  height={'100%'}
                  radius={0}
                  colors={SkeletonColors}
               />
            </Animated.View>
         )}
      </View>
   );
}
