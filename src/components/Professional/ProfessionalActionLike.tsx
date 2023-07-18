import { TouchableOpacity, View, Text } from 'react-native';
import { ThumbsUp } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import clsx from 'clsx';

import { useProfessional } from '@hooks/shared';

interface ProfessionalActionLikeProps {
   user_id: number;
   interactions: {
      tipo_id: number;
      registro_id: number;
   }[];
}

export function ProfessionalActionLike({
   user_id,
   interactions
}: ProfessionalActionLikeProps) {
   const { handleClickInteraction, countInteraction, someInteraction } =
      useProfessional({
         type: 1,
         interactions,
         user_id
      });

   const styleLike = clsx('font-heading_md text-white', {
      'text-white': !someInteraction,
      'text-red-400': someInteraction
   });

   return (
      <TouchableOpacity
         onPress={handleClickInteraction}
         hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
      >
         <View className="flex-row items-center space-x-1.5">
            <View className="flex-row space-x-1">
               <ThumbsUp
                  className={`-mt-[2px] ${
                     someInteraction ? 'text-red-400' : 'text-white'
                  } `}
                  size={RFValue(18)}
               />
               <Text className={styleLike} style={{ fontSize: RFValue(11) }}>
                  {countInteraction}
               </Text>
            </View>
            <Text className={styleLike} style={{ fontSize: RFValue(10) }}>
               {someInteraction ? 'Curtido' : 'Curtir'}
            </Text>
         </View>
      </TouchableOpacity>
   );
}
