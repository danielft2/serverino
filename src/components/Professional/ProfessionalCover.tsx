import { ImageLoading } from '@components/ImageLoading';
import { View } from 'react-native';

interface ProfessionalCoverProps {
   coverUrl: string;
}

export function ProfessionalCover({ coverUrl }: ProfessionalCoverProps) {
   return (
      <View className="w-full base:max-h-52 sm:max-h-56">
         <ImageLoading imageUrl={coverUrl} />
      </View>
   );
}
