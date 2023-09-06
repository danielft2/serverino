import { View, Text } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { useFontsize } from '@hooks/shared';
import DisoveryProfessional from '@assets/ilustrations/discovery-professsionals.svg';

export function DiscoveryIntro() {
   const { getFontsize } = useFontsize();

   return (
      <View
         className="items-center justify-center px-3"
         style={{ marginTop: RFPercentage(15) }}
      >
         <DisoveryProfessional width={RFValue(160)} height={RFValue(160)} />
         <Text
            className="mt-2 text-center font-heading_sm text-gray-50"
            style={{ fontSize: getFontsize(15) }}
         >
            Descubra profissionais pelas suas áreas.
         </Text>
         <Text
            className="-mt-1 mb-4 max-w-[98%] text-center text-gray-200"
            style={{ fontSize: getFontsize(13) }}
         >
            Busque por uma área acima e conheça profissionais de vários lugares
            fora da sua localização.
         </Text>
      </View>
   );
}
