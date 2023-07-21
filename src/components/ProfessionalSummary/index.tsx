import { memo } from 'react';
import { View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Professional } from '@components/Professional';
import { ProfessionalModel } from '@domain/models/professional.model';

interface ProfessionalSummaryProps {
   data: ProfessionalModel;
   index: number;
}

function ProfessionalSummaryRoot({ data, index }: ProfessionalSummaryProps) {
   return (
      <Animated.View entering={FadeIn.delay(150 * index)}>
         <Professional.Root>
            <Professional.Header
               areaName={data.area.nome}
               fullName={data.nome_fantasia}
               avatarUrl={data.linkImagem}
            />
            <View>
               <Professional.Content coverUrl={data.linkImagemCapa} />
               {data?.atuacoes[0]?.descricao && (
                  <View className="line-clamp-1 h-14 justify-center px-5">
                     <Text
                        className="py-2 font-reading leading-4 text-gray-100"
                        style={{ fontSize: RFValue(12) }}
                        numberOfLines={2}
                     >
                        {data.atuacoes[0].descricao}
                     </Text>
                  </View>
               )}

               <Professional.Actions>
                  <Professional.ActionLike
                     user_id={data.user_id}
                     interactions={data.usuario.interacoes}
                  />
                  <Professional.ActionRecommend
                     user_id={data.user_id}
                     interactions={data.usuario.interacoes}
                  />
               </Professional.Actions>
            </View>
         </Professional.Root>
      </Animated.View>
   );
}

export const ProfessionalSummary = memo(ProfessionalSummaryRoot);
