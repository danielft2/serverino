import { View, Image } from 'react-native';

interface ProfessionalContentProps {
   coverUrl: string;
}

export function ProfessionalContent({ coverUrl }: ProfessionalContentProps) {
   return (
      <View className="max-h-56 w-full">
         <Image
            source={{ uri: coverUrl }}
            className="h-full w-full object-cover"
         />
      </View>
   );
}
