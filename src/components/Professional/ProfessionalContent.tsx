import { View, Image } from 'react-native';

interface ProfessionalContentProps {
   coverUrl: string;
}

export function ProfessionalContent({ coverUrl }: ProfessionalContentProps) {
   return (
      <View className="w-full base:max-h-52 md:max-h-56">
         <Image
            source={{ uri: coverUrl }}
            className="h-full w-full object-cover"
         />
      </View>
   );
}
