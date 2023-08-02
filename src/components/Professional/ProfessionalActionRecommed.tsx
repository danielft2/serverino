import { TouchableOpacity, View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { CheckCircle } from 'lucide-react-native';
import clsx from 'clsx';

import { useProfessional } from '@hooks/shared';

interface ProfessionalActionRecommendProps {
   user_id: number;
   professional_id: string;
   interactions: {
      tipo_id: number;
      registro_id: number;
   }[];
}

export function ProfessionalActionRecommend({
   user_id,
   professional_id,
   interactions
}: ProfessionalActionRecommendProps) {
   const { handleClickInteraction, countInteraction, someInteraction } =
      useProfessional({ type: 2, interactions, user_id, professional_id });

   const styleRecommend = clsx('font-heading_md text-white', {
      'text-white': !someInteraction,
      'text-green-400': someInteraction
   });

   return (
      <TouchableOpacity
         onPress={handleClickInteraction}
         hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
      >
         <View className="flex-row items-center space-x-1.5">
            <View className="flex-row space-x-1">
               <CheckCircle
                  className={`${
                     someInteraction ? 'text-green-400' : 'text-white'
                  } `}
                  size={RFValue(16)}
               />
               <Text
                  className={styleRecommend}
                  style={{ fontSize: RFValue(11) }}
               >
                  {countInteraction}
               </Text>
            </View>
            <Text className={styleRecommend} style={{ fontSize: RFValue(10) }}>
               {someInteraction ? 'Recomendado' : 'Recomendar'}
            </Text>
         </View>
      </TouchableOpacity>
   );
}
