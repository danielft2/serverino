import { ReactNode } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import Animated, { SlideInLeft } from 'react-native-reanimated';

import { Option } from '@components/Option';
import { useFontsize } from '@hooks/shared';

interface ProfileOptionCardProps {
   label: string;
   icon: ReactNode;
   index: number;
   onPress?: () => void;
}

const TouchableOpacityAnimated =
   Animated.createAnimatedComponent(TouchableOpacity);

export function ProfileOptionCard({
   icon,
   label,
   onPress,
   index
}: ProfileOptionCardProps) {
   const { getFontsize } = useFontsize();

   return (
      <TouchableOpacityAnimated
         entering={SlideInLeft.duration(200 * index)}
         className="w-full base:mb-3 md:mb-4"
         onPress={onPress}
      >
         <Option.Root isBackground key={label}>
            <Option.Container>
               <Option.Icon>{icon}</Option.Icon>
               <Text
                  className="font-heading_md text-white"
                  style={{ fontSize: getFontsize(11) }}
               >
                  {label}
               </Text>
            </Option.Container>
            <ChevronRight size={20} className="text-white" />
         </Option.Root>
      </TouchableOpacityAnimated>
   );
}
