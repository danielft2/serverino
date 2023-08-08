import { Text, View, useWindowDimensions } from 'react-native';
import { Briefcase } from 'lucide-react-native';

import { useFontsize } from '@hooks/shared';

interface OccupationAreaProps {
   name: string;
   description: string;
   isOnly: boolean;
}

export function OccupationArea({
   name,
   description,
   isOnly
}: OccupationAreaProps) {
   const { getFontsize } = useFontsize();
   const { width } = useWindowDimensions();

   return (
      <View
         className="space-y-1 rounded-md bg-blue_dark-600 base:max-h-32 base:p-5 sm:max-h-[140px] sm:px-6 sm:py-5"
         style={{
            maxWidth: isOnly ? width - 32 : width - 48,
            minWidth: isOnly ? width - 32 : width - 48
         }}
      >
         <View className="flex-row space-x-1.5 ">
            <Briefcase size={getFontsize(18)} className="text-gray-50" />
            <Text
               className="font-heading_sm text-gray-50"
               style={{ fontSize: getFontsize(12) }}
            >
               {name}
            </Text>
         </View>
         <Text
            className="text-gray-200 base:leading-4 sm:leading-[18px]"
            style={{ fontSize: getFontsize(12) }}
         >
            {description}
         </Text>
      </View>
   );
}
