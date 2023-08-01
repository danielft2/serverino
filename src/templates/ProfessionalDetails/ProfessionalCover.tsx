import { View, Image } from 'react-native';

import { Gradient } from '@components/Gradient';

interface ProfessionalCoverProps {
   coverUrl: string;
}

export function ProfessionalCover({ coverUrl }: ProfessionalCoverProps) {
   return (
      <View className="relative -mb-1 max-h-40 bg-slate-50">
         <Image
            className="h-full w-full bg-contain"
            source={{ uri: coverUrl ?? 'https://' }}
         />
         <Gradient
            colors={[
               'rgba(0, 0, 0, 0.4)',
               'rgba(11, 12, 15, 0.7)',
               'rgba(11, 12, 15, 1)'
            ]}
         />
      </View>
   );
}
