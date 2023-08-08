import { ImageLoading } from '@components/ImageLoading';
import { View } from 'react-native';

interface ProfessionalContentProps {
   coverUrl: string;
}

export function ProfessionalContent({ coverUrl }: ProfessionalContentProps) {
   return (
      <View className="w-full base:max-h-52 sm:max-h-56">
         <ImageLoading imageUrl={coverUrl} />
      </View>
   );
}
