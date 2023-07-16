import { View, ScrollView } from 'react-native';
import { Professional } from '@components/Professional';

export function ProfessionalSkeleton() {
   return (
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
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
      </ScrollView>
   );
}
