import { View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Avatar } from '@components/Avatar';

interface ProfessionalHeaderProps {
   avatarUrl: string;
   fullName: string;
   areaName: string;
}

export function ProfessionalHeader({
   areaName,
   fullName,
   avatarUrl
}: ProfessionalHeaderProps) {
   return (
      <View className="mb-3 flex-row items-center space-x-2 px-5">
         <Avatar.Root>
            <Avatar.Container size={40} source={avatarUrl}>
               <Avatar.Fallback>
                  <Text className="font-heading_md text-xs text-white">
                     {fullName.split('')[0].toUpperCase()}
                     {fullName.split('')[1].toUpperCase()}
                  </Text>
               </Avatar.Fallback>
            </Avatar.Container>
         </Avatar.Root>
         <View className="">
            <Text
               className="-mb-1 font-heading_md text-green-400"
               style={{ fontSize: RFValue(11) }}
            >
               {areaName}
            </Text>
            <Text
               className="truncate font-heading_md text-white"
               style={{ fontSize: RFValue(11) }}
            >
               {fullName}
            </Text>
         </View>
      </View>
   );
}
