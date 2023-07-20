import { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ProfileItemCard } from '@components/Option';
import { styled } from 'nativewind';

interface InformationRowProps {
   subtitle: string;
   description: string;
   icon: ReactNode;
   onPress?: () => void;
}

export function InformationRowStyled({
   icon,
   subtitle,
   description,
   onPress,
   ...rest
}: InformationRowProps) {
   return (
      <TouchableOpacity className="w-full" onPress={onPress} {...rest}>
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

export const InformationRow = styled(InformationRowStyled);
