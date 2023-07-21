import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ProfileItemCard } from '@components/Option';
import { styled } from 'nativewind';
import Animated, { FadeIn } from 'react-native-reanimated';

interface InformationRowProps {
   subtitle: string;
   description: string;
   icon: ReactNode;
   index: number;
}

export function InformationRowStyled({
   icon,
   subtitle,
   description,
   index,
   ...rest
}: InformationRowProps) {
   return (
      <Animated.View
         entering={FadeIn.duration(600 * index)}
         className="w-full"
         {...rest}
      >
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
      </Animated.View>
   );
}

export const InformationRow = styled(InformationRowStyled);
