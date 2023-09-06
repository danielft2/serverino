import { View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ProfessionalDescriptionProps {
   description: string;
}

export function ProfessionalDescription({
   description
}: ProfessionalDescriptionProps) {
   return (
      <>
         {description && (
            <View className="line-clamp-1 h-14 justify-center px-5">
               <Text
                  className="py-2 font-reading leading-4 text-gray-100"
                  style={{ fontSize: RFValue(12) }}
                  numberOfLines={2}
               >
                  {description}
               </Text>
            </View>
         )}
      </>
   );
}
