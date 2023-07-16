import { View } from 'react-native';
import { Image } from 'expo-image';

interface ProfessionalContentProps {
   coverUrl: string;
}

export function ProfessionalContent({ coverUrl }: ProfessionalContentProps) {
   return (
      <View className="max-h-56 w-full">
         <Image
            source={coverUrl}
            contentFit="cover"
            className="h-full w-full"
         />
      </View>
   );
}
