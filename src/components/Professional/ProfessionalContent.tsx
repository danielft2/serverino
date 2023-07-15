import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import { RFValue } from 'react-native-responsive-fontsize';

interface ProfessionalContentProps {
   coverUrl: string;
   aboutMe: string;
}

export function ProfessionalContent({
   coverUrl,
   aboutMe
}: ProfessionalContentProps) {
   return (
      <View className="min-h-56 max-h-56 w-full space-y-4">
         <Image
            source={coverUrl}
            contentFit="cover"
            className="h-full w-full"
         />
         {aboutMe && (
            <Text
               className="px-5 font-reading leading-4 text-blue_dark-200"
               style={{ fontSize: RFValue(12) }}
            >
               {aboutMe}
            </Text>
         )}
      </View>
   );
}
