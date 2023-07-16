import clsx from 'clsx';
import { ThumbsUp } from 'lucide-react-native';
import { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ProfessionalActionLikeProps {
   onPress: () => void;
}

export function ProfessionalActionLike({
   onPress
}: ProfessionalActionLikeProps) {
   const [active, setActive] = useState(false);

   return (
      <TouchableOpacity
         onPress={() => setActive(!active)}
         hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
      >
         <View className="flex-row items-center space-x-2">
            <View>
               <ThumbsUp
                  className={`-mt-[4px] ${
                     active ? 'text-red-400' : 'text-white'
                  } `}
                  size={RFValue(20)}
               />
            </View>

            <Text
               className={clsx('mt-1 font-heading_md text-white', {
                  'text-white': !active,
                  'text-red-400': active
               })}
               style={{ fontSize: RFValue(11) }}
            >
               {active ? 'Curtido' : 'Curtir'}
            </Text>
         </View>
      </TouchableOpacity>
   );
}
