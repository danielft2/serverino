import { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ProfileItemCard } from '@components/Option';

interface InformationRowProps {
   subtitle: string;
   description: string;
   icon: ReactNode;
   onPress?: () => void;
}

export function InformationRow({
   icon,
   subtitle,
   description,
   onPress
}: InformationRowProps) {
   return (
      <TouchableOpacity className="w-full" onPress={onPress}>
         <ProfileItemCard.Root key={subtitle}>
            <ProfileItemCard.Container>
               <ProfileItemCard.Icon>{icon}</ProfileItemCard.Icon>
               <View className="mt-1">
                  <Text
                     className="font-heading_md text-gray-100"
                     style={{ fontSize: RFValue(11) }}
                  >
                     {subtitle}
                  </Text>
                  <Text
                     className="-mt-1 font-heading_md text-gray-50"
                     style={{ fontSize: RFValue(11) }}
                  >
                     {description}
                  </Text>
               </View>
            </ProfileItemCard.Container>
         </ProfileItemCard.Root>
      </TouchableOpacity>
   );
}
