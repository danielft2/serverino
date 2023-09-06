import { View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { Professional } from '@components/Professional';

export function ProfessionalsSkeleton() {
   return (
      <Animated.ScrollView
         contentContainerStyle={{ paddingBottom: 100 }}
         entering={FadeIn.delay(100)}
         exiting={FadeOut.delay(100)}
      >
         <View className="space-y-4">
            <View>
               <Professional.Skeleton />
            </View>
            <View>
               <Professional.Skeleton />
            </View>
            <View>
               <Professional.Skeleton />
            </View>
         </View>
      </Animated.ScrollView>
   );
}
