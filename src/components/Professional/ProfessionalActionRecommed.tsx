import { TouchableOpacity, View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { CheckCircle } from 'lucide-react-native';
import clsx from 'clsx';

import { useFontsize } from '@hooks/shared';
import { useProfessional } from '@hooks/components';
import { ProfessionalInteraction } from '@domain/types';

export function ProfessionalActionRecommend({
   professional_id,
   professional_uuid,
   professionalIndex,
   interactions
}: Partial<ProfessionalInteraction>) {
   const { getFontsize } = useFontsize();

   const { handleClickInteraction, countInteraction, someInteraction } =
      useProfessional({
         type: 2,
         interactions,
         professional_uuid,
         professional_id,
         professionalIndex
      });

   const styleRecommend = clsx('font-heading_md text-white', {
      'text-white': !someInteraction,
      'text-green-400': someInteraction
   });

   return (
      <TouchableOpacity onPress={handleClickInteraction}>
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
                  style={{ fontSize: getFontsize(11) }}
               >
                  {countInteraction}
               </Text>
            </View>
            <Text
               className={styleRecommend}
               style={{ fontSize: getFontsize(10) }}
            >
               {someInteraction ? 'Recomendado' : 'Recomendar'}
            </Text>
         </View>
      </TouchableOpacity>
   );
}
