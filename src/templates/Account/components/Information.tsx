import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { styled } from 'nativewind';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Option } from '@components/Option';
import { useFontsize } from '@hooks/shared';

interface InformationProps {
   subtitle: string;
   description: string;
   icon: ReactNode;
   index: number;
}

export function InformationStyled({
   icon,
   subtitle,
   description,
   index,
   ...rest
}: InformationProps) {
   const { getFontsize } = useFontsize();

   return (
      <Animated.View
         entering={FadeIn.duration(600 * index)}
         className="w-full"
         {...rest}
      >
         <Option.Root key={subtitle}>
            <Option.Container>
               <Option.Icon>{icon}</Option.Icon>
               <View className="mt-1">
                  <Text
                     className="font-heading_md text-gray-100"
                     style={{ fontSize: getFontsize(11) }}
                  >
                     {subtitle}
                  </Text>
                  <Text
                     className="-mt-1 font-heading_md text-gray-50"
                     style={{ fontSize: getFontsize(11) }}
                  >
                     {description}
                  </Text>
               </View>
            </Option.Container>
         </Option.Root>
      </Animated.View>
   );
}

export const Information = styled(InformationStyled);
