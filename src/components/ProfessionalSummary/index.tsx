import { memo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Professional } from '@components/Professional';
import { ProfessionalModel } from '@domain/models/professional.model';
import { useNavigation } from '@react-navigation/native';

interface ProfessionalSummaryProps {
   data: ProfessionalModel;
   index: number;
}

function ProfessionalSummaryRoot({ data, index }: ProfessionalSummaryProps) {
   const { navigate } = useNavigation();

   return (
      <Pressable onPress={() => navigate('professional', { id: data.uuid })}>
         <Animated.View entering={FadeIn.delay(50 * index)}>
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
                        professional_id={data.uuid}
                        interactions={data.usuario.interacoes}
                     />
                     <Professional.ActionRecommend
                        user_id={data.user_id}
                        professional_id={data.uuid}
                        interactions={data.usuario.interacoes}
                     />
                  </Professional.Actions>
               </View>
            </Professional.Root>
         </Animated.View>
      </Pressable>
   );
}

export const ProfessionalSummary = memo(ProfessionalSummaryRoot);
