import { RFValue } from 'react-native-responsive-fontsize';
import { Professional } from '@components/Professional';
import { ProfessionalModel } from '@domain/models/professional.model';
import { memo } from 'react';
import { View, Text } from 'react-native';

interface ProfessionalSummaryProps {
   data: ProfessionalModel;
}

function ProfessionalSummaryRoot({ data }: ProfessionalSummaryProps) {
   return (
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
               <Professional.ActionLike onPress={() => true} />
               <Professional.ActionRecommend onPress={() => true} />
            </Professional.Actions>
         </View>
      </Professional.Root>
   );
}

export const ProfessionalSummary = memo(ProfessionalSummaryRoot);
