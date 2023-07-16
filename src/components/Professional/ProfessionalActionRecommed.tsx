import { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { CheckCircle } from 'lucide-react-native';
import clsx from 'clsx';

interface ProfessionalActionRecommendProps {
   onPress: () => void;
}

export function ProfessionalActionRecommend({
   onPress
}: ProfessionalActionRecommendProps) {
   const [active, setActive] = useState(false);
   return (
      <TouchableOpacity
         onPress={() => setActive(!active)}
         hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
      >
         <View className="flex-row items-center space-x-2">
            <CheckCircle
               className={`${active ? 'text-green-400' : 'text-white'} `}
               size={RFValue(18)}
            />
            <Text
               className={clsx('mt-[1px] font-heading_md text-white', {
                  'text-white': !active,
                  'text-green-400': active
               })}
               style={{ fontSize: RFValue(11) }}
            >
               Recomendar
            </Text>
         </View>
      </TouchableOpacity>
   );
}
