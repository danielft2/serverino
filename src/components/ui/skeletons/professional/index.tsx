import { View } from 'react-native';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import { SkeletonColors } from '@utils/others';

export function ProfessionalSkeleton() {
  return (
    <MotiView className="rounded-3xl bg-blue_dark-700 py-5">
      <Skeleton.Group show>
        <View className="mb-3 flex-row items-center space-x-2 px-5">
          <Skeleton
            radius="round"
            width={40}
            height={40}
            colors={SkeletonColors}
          />
          <View>
            <View className="mb-2">
              <Skeleton width={100} height={10} colors={SkeletonColors} />
            </View>
            <Skeleton width={140} height={12} colors={SkeletonColors} />
          </View>
        </View>
        <Skeleton
          width={'100%'}
          height={256}
          radius={0}
          colors={SkeletonColors}
        />
        <View className="mt-3 flex-row justify-between px-5">
          <Skeleton width={100} height={16} colors={SkeletonColors} />
          <Skeleton width={100} height={16} colors={SkeletonColors} />
        </View>
      </Skeleton.Group>
    </MotiView>
  );
}
