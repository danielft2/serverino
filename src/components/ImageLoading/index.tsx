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
      if (imageUrl) setIsError(false);
   }, [imageUrl]);

   return (
      <View className="relative h-full w-full">
         {!isError && (
            <Image
               source={{ uri: imageUrl }}
               className="absolute h-full w-full object-cover"
               onLoadEnd={() => setIsLoading(false)}
               onError={() => setIsError(true)}
            />
         )}
         {isLoading ||
            (isError && (
               <Animated.View
                  className="absolute top-0 h-full"
                  exiting={FadeOut.delay(50)}
               >
                  <Skeleton
                     width={'100%'}
                     height={'100%'}
                     radius={0}
                     colors={SkeletonColors}
                  />
               </Animated.View>
            ))}
      </View>
   );
}
