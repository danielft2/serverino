import { View, Text, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Professional } from '@components/Professional';
import { ProfessionalModel } from '@domain/models';
import { InteractionTypes } from '@domain/types';
import { useProfessional } from '@hooks/components';
import { useFeedInteractions } from '@hooks/screens/Feed/useFeeedInteractions';
import { memo } from 'react';

interface ProfessionalSummaryProps {
   data: ProfessionalModel;
   index: number;
}

function ProfessionalSummaryMemo({ data, index }: ProfessionalSummaryProps) {
   const { navigate } = useNavigation();
   const { handleInteraction } = useFeedInteractions();
   const { likeInteractions, recommendsInteractions } = useProfessional({
      interactions: data.usuario.interacoes
   });

   function handleClickAction(actionType: InteractionTypes) {
      handleInteraction({
         professional_uuid: data.uuid,
         professional_id: data.user_id,
         professionalIndex: index,
         interactionType: actionType,
         newInteraction: verifyIfNewInteraction(actionType)
      });
   }

   function verifyIfNewInteraction(actionType: InteractionTypes) {
      if (actionType === InteractionTypes.LIKE)
         return !likeInteractions.interactionMine;
      else return !recommendsInteractions.interactionMine;
   }

   return (
      <Pressable onPress={() => navigate('professional', { uuid: data.uuid })}>
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
                        countInteractions={likeInteractions.count}
                        interactionMine={likeInteractions.interactionMine}
                        onInteraction={() =>
                           handleClickAction(InteractionTypes.LIKE)
                        }
                     />
                     <Professional.ActionRecommend
                        countInteractions={recommendsInteractions.count}
                        interactionMine={recommendsInteractions.interactionMine}
                        onInteraction={() =>
                           handleClickAction(InteractionTypes.RECOMMEND)
                        }
                     />
                  </Professional.Actions>
               </View>
            </Professional.Root>
         </Animated.View>
      </Pressable>
   );
}

export const ProfessionalSummary = memo(ProfessionalSummaryMemo);
