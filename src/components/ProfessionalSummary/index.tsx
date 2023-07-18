import { memo } from 'react';
import { View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Professional } from '@components/Professional';
import { ProfessionalModel } from '@domain/models/professional.model';
import { MotiView } from 'moti';

interface ProfessionalSummaryProps {
   data: ProfessionalModel;
   index: number;
}

function ProfessionalSummaryRoot({ data, index }: ProfessionalSummaryProps) {
   return (
      <MotiView
         from={{ opacity: 0, translateY: -30 }}
         animate={{ opacity: 1, translateY: 0 }}
         transition={{ delay: index, type: 'timing' }}
      >
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
                        className="py-2 font-reading leading-4 text-blue_dark-200"
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
      </MotiView>
   );
}

export const ProfessionalSummary = memo(ProfessionalSummaryRoot);
