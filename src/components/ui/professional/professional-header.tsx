import { View, Text } from 'react-native';

import { Avatar } from '@components/ui/avatar';
import { useFontsize } from '@hooks';

interface ProfessionalHeaderProps {
  avatarUrl: string;
  fullName: string;
  areaName?: string;
}

export function ProfessionalHeader({
  areaName,
  fullName,
  avatarUrl
}: ProfessionalHeaderProps) {
  const { getFontsize } = useFontsize();
  return (
    <View className="mb-3 flex-row items-center space-x-2 px-5">
      <Avatar.Root>
        <Avatar.Container size={40} source={avatarUrl}>
          <Avatar.Fallback name={fullName} size={11} />
        </Avatar.Container>
      </Avatar.Root>
      <View className="">
        {areaName && (
          <Text
            className="-mb-1 font-heading_md text-green-400"
            style={{ fontSize: getFontsize(11) }}
          >
            {areaName}
          </Text>
        )}
        <Text
          className="truncate font-heading_md text-white"
          style={{ fontSize: getFontsize(11) }}
        >
          {fullName}
        </Text>
      </View>
    </View>
  );
}