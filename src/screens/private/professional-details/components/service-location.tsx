import { View, Text } from 'react-native';
import { MapPin } from 'lucide-react-native';
import { styled } from 'nativewind';

import { useFontsize } from '@hooks';

interface ServiceLocationProps {
  locationName: string;
}

export function ServiceLocationStyled({
  locationName,
  ...rest
}: ServiceLocationProps) {
  const { getFontsize } = useFontsize();

  return (
    <View
      className="flex-grow flex-row items-center justify-center space-x-1.5 rounded-md bg-blue_dark-600 px-3 py-2 base:h-10 sm:h-10"
      {...rest}
    >
      <MapPin size={getFontsize(15)} className="text-red-400" />
      <Text
        className="-mb-[1.5px] font-heading_md text-gray-100"
        style={{ fontSize: getFontsize(11) }}
      >
        {locationName}
      </Text>
    </View>
  );
}

export const ServiceLocation = styled(ServiceLocationStyled);
