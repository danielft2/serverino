import { ReactNode } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated, { SlideInLeft } from 'react-native-reanimated';

import { Option } from '@components/Option';

interface OptionCardProfileProps {
   label: string;
   icon: ReactNode;
   index: number;
   onPress?: () => void;
}

const TouchableOpacityAnimated =
   Animated.createAnimatedComponent(TouchableOpacity);

export function OptionCardProfile({
   icon,
   label,
   onPress,
   index
}: OptionCardProfileProps) {
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
                  style={{ fontSize: RFValue(11) }}
               >
                  {label}
               </Text>
            </Option.Container>
            <ChevronRight size={20} className="text-white" />
         </Option.Root>
      </TouchableOpacityAnimated>
   );
}
