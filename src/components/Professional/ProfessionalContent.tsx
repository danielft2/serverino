import { ImageLoading } from '@components/ImageLoading';
import { View } from 'react-native';

interface ProfessionalContentProps {
   coverUrl: string;
}

export function ProfessionalContent({ coverUrl }: ProfessionalContentProps) {
   return (
      <View className="max-h-56 w-full">
         <ImageLoading imageUrl={coverUrl ?? 'https://'} />
      </View>
   );
}
