import { memo } from 'react';
import { View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Professional } from '@components/ui/professional';
import { InteractionTypes } from '@domain/types';
import { useProfessional, useInteractions } from '@hooks';
import { APP_CONSTANTS } from '@constants';
import { ProfessionalModel } from '@services/professional/models';

interface ProfessionalSummaryProps {
  data: ProfessionalModel;
  index: number;
  isFeedProfessional?: boolean;
  areaId?: string;
}

function ProfessionalSummaryMemo({
  data,
  index,
  isFeedProfessional,
  areaId
}: ProfessionalSummaryProps) {
  const { navigate } = useNavigation();
  const { handleInteraction } = useInteractions(
    isFeedProfessional
      ? [APP_CONSTANTS.QUERIES_KEYS.QUERY_FEED]
      : [APP_CONSTANTS.QUERIES_KEYS.PROFESSIONAL_BY_AREA, areaId]
  );

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
            areaName={data?.area?.nome}
            fullName={data.nome_fantasia}
            avatarUrl={data.linkImagem}
          />
          <View>
            <Professional.Cover coverUrl={data.linkImagemCapa} />
            <Professional.Description
              description={data?.atuacoes ? data.atuacoes[0]?.descricao : null}
            />
            <Professional.Actions>
              <Professional.ActionLike
                countInteractions={likeInteractions.count}
                interactionMine={likeInteractions.interactionMine}
                onInteraction={() => handleClickAction(InteractionTypes.LIKE)}
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