import { Briefcase } from 'lucide-react-native';
import { Text, View, useWindowDimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface OccupationAreaProps {
   name: string;
   description: string;
}

export function OccupationArea({ name, description }: OccupationAreaProps) {
   const { width } = useWindowDimensions();
   return (
      <View
         className="h-[140px] max-h-[140px] space-y-1 rounded-md bg-blue_dark-600 px-6 py-5"
         style={{ maxWidth: width - 48, minWidth: width - 48 }}
      >
         <View className="flex-row space-x-1.5 ">
            <Briefcase size={RFValue(18)} className="text-gray-50" />
            <Text
               className="font-heading_sm text-gray-50"
               style={{ fontSize: RFValue(12) }}
            >
               {name}
            </Text>
         </View>
         <Text
            className="leading-[18px] text-gray-200"
            style={{ fontSize: RFValue(12) }}
         >
            {description}
         </Text>
      </View>
   );
}
