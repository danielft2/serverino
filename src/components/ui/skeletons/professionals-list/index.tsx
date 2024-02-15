import { View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { ProfessionalSkeleton } from '@components/ui/skeletons/professional';

export function ProfessionalsListSkeleton() {
  return (
    <Animated.ScrollView
      contentContainerStyle={{ paddingBottom: 100 }}
      entering={FadeIn.delay(100)}
      exiting={FadeOut.delay(100)}
    >
      <View className="space-y-4">
        <View>
          <ProfessionalSkeleton />
        </View>
        <View>
          <ProfessionalSkeleton />
        </View>
        <View>
          <ProfessionalSkeleton />
        </View>
      </View>
    </Animated.ScrollView>
  );
}
