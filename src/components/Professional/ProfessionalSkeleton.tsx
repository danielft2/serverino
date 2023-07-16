import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import { View } from 'react-native';

export function ProfessionalSkeleton() {
   return (
      <MotiView className="rounded-3xl bg-blue_dark-600 py-5">
         <Skeleton.Group show>
            <View className="mb-3 flex-row items-center space-x-2 px-5">
               <Skeleton radius="round" width={40} height={40} />
               <View>
                  <View className="mb-2">
                     <Skeleton width={100} height={10} />
                  </View>
                  <Skeleton width={140} height={12} />
               </View>
            </View>
            <Skeleton width={'100%'} height={256} radius={0} />
            <View className="mt-3 flex-row justify-between px-5">
               <Skeleton width={100} height={16} />
               <Skeleton width={100} height={16} />
            </View>
         </Skeleton.Group>
      </MotiView>
   );
}
