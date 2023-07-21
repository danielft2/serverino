import { useEffect } from 'react';
import { View } from 'react-native';

import Animated, {
   useAnimatedStyle,
   useSharedValue,
   withTiming
} from 'react-native-reanimated';

interface ProgressBarProps {
   totalItems: number;
   totalItemsCompleted: number;
}

export function ProgessBar({
   totalItems,
   totalItemsCompleted
}: ProgressBarProps) {
   const current = Math.round((totalItemsCompleted / totalItems) * 100);
   const progress = useSharedValue(current);

   const progressStyleAnimated = useAnimatedStyle(() => ({
      width: `${progress.value}%`
   }));

   useEffect(() => {
      progress.value = withTiming(current, { duration: 300 });
   }, [current, progress]);

   return (
      <View className={`h-1.5 w-full overflow-hidden bg-blue_dark-300`}>
         <Animated.View
            style={[progressStyleAnimated]}
            className="h-1.5 rounded-full bg-green-500 transition-all"
         ></Animated.View>
      </View>
   );
}
