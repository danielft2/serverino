import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import { View, useWindowDimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export function ProfessionalSkeleton() {
   const { width } = useWindowDimensions();
   return (
      <MotiView className="w-full flex-1 bg-blue_dark-900">
         <Skeleton.Group show>
            <View>
               <View className="items-center">
                  <Skeleton width={'100%'} height={160} radius={0} />
                  <View className="-mt-16 mb-4">
                     <Skeleton
                        width={RFValue(110)}
                        height={RFValue(110)}
                        radius="round"
                     />
                  </View>
               </View>
               <View className="mb-6 flex-row items-center space-x-2 px-4">
                  <View>
                     <Skeleton width={width / 3 - 16} height={32} radius={6} />
                  </View>
                  <View>
                     <Skeleton width={width / 3 - 16} height={32} radius={6} />
                  </View>
                  <View>
                     <Skeleton width={width / 3 - 16} height={32} radius={6} />
                  </View>
               </View>
               <View className="mb-6 px-4">
                  <Skeleton width={160} height={16} radius={6} />
                  <View className="h-3"></View>
                  <Skeleton width={'100%'} height={140} radius={6} />
               </View>
               <View className="px-4">
                  <Skeleton width={160} height={16} radius={6} />
                  <View className="h-3"></View>
                  <View className="flex-row space-x-2">
                     <View>
                        <Skeleton
                           width={width / 3 - 16}
                           height={44}
                           radius={6}
                        />
                     </View>
                     <View>
                        <Skeleton
                           width={width / 3 - 16}
                           height={44}
                           radius={6}
                        />
                     </View>
                     <View>
                        <Skeleton
                           width={width / 3 - 16}
                           height={44}
                           radius={6}
                        />
                     </View>
                  </View>
               </View>
            </View>
            <View className="flex-1 justify-end p-4">
               <Skeleton width={'100%'} height={52} radius={6} />
            </View>
         </Skeleton.Group>
      </MotiView>
   );
}
