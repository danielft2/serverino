import { MapPin } from 'lucide-react-native';
import { styled } from 'nativewind';
import { View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ServiceLocationProps {
   locationName: string;
}

export function ServiceLocationStyled({
   locationName,
   ...rest
}: ServiceLocationProps) {
   return (
      <View
         className="h-12 flex-grow flex-row items-center justify-center space-x-2 rounded-md bg-blue_dark-600 px-3 py-2"
         {...rest}
      >
         <MapPin size={RFValue(16)} className="text-red-400" />
         <Text
            className="-mb-[1.5px] font-heading_md text-gray-100"
            style={{ fontSize: RFValue(11) }}
         >
            {locationName}
         </Text>
      </View>
   );
}

export const ServiceLocation = styled(ServiceLocationStyled);
