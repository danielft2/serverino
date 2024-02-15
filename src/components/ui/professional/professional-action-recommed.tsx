import { TouchableOpacity, View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { CheckCircle } from 'lucide-react-native';
import clsx from 'clsx';

import { useFontsize } from '@hooks';
import { InteractionActionProps } from '@domain/types';

export function ProfessionalActionRecommend({
  countInteractions,
  interactionMine,
  onInteraction
}: InteractionActionProps) {
  const { getFontsize } = useFontsize();

  const styleRecommend = clsx('font-heading_md text-white', {
    'text-white': !interactionMine,
    'text-green-400': interactionMine
  });

  return (
    <TouchableOpacity onPress={onInteraction}>
      <View className="flex-row items-center space-x-1.5">
        <View className="flex-row space-x-1">
          <CheckCircle
            className={`${interactionMine ? 'text-green-400' : 'text-white'} `}
            size={RFValue(16)}
          />
          <Text
            className={styleRecommend}
            style={{ fontSize: getFontsize(11) }}
          >
            {countInteractions}
          </Text>
        </View>
        <Text className={styleRecommend} style={{ fontSize: getFontsize(10) }}>
          {interactionMine ? 'Recomendado' : 'Recomendar'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
