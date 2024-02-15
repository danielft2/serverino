import { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { Skeleton } from 'moti/skeleton';

import { Gradient } from '@components/ui/gradient';
import { SkeletonColors } from '@utils/others';
import Animated, { FadeOut } from 'react-native-reanimated';

interface ProfessionalCoverProps {
  coverUrl: string;
}

export function ProfessionalCover({ coverUrl }: ProfessionalCoverProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (coverUrl) setIsError(false);
  }, [coverUrl]);

  return (
    <View className="relative -mb-1 max-h-40 bg-slate-50">
      {!isError && (
        <Image
          source={{ uri: coverUrl }}
          className="h-full w-full object-cover"
          onLoadEnd={() => setIsLoading(false)}
          onError={() => setIsError(true)}
        />
      )}
      {isLoading && (
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
      )}
      {!isLoading && (
        <Gradient
          colors={[
            'rgba(0, 0, 0, 0.4)',
            'rgba(11, 12, 15, 0.7)',
            'rgba(11, 12, 15, 1)'
          ]}
        />
      )}
    </View>
  );
}
