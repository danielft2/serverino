import { Pressable, View, Text } from 'react-native';
import { ThumbsUp } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated, {
   useAnimatedStyle,
   useSharedValue,
   withTiming
} from 'react-native-reanimated';
import clsx from 'clsx';

import { ProfessionalInteraction } from '@domain/types';
import { useFontsize } from '@hooks/shared';
import { useProfessional } from '@hooks/components';

export function ProfessionalActionLike({
   professional_id,
   professional_uuid,
   professionalIndex,
   interactions
}: Partial<ProfessionalInteraction>) {
   const { getFontsize } = useFontsize();

   const { handleClickInteraction, countInteraction, someInteraction } =
      useProfessional({
         type: 1,
         interactions,
         professional_id,
         professional_uuid,
         professionalIndex
      });

   const shakeLike = useSharedValue(0);

   const shakeLikeAnimatedStyled = useAnimatedStyle(() => ({
      transform: [{ rotate: `${shakeLike.value}deg` }]
   }));

   function handleLike() {
      shakeLike.value = withTiming(-20, { duration: 200 });
      handleClickInteraction();
   }

   const onPressOut = () =>
      (shakeLike.value = withTiming(0, { duration: 200 }));

   const styleLike = clsx('font-heading_md text-white', {
      'text-white': !someInteraction,
      'text-red-400': someInteraction
   });

   return (
      <Pressable onPressIn={handleLike} onPressOut={onPressOut}>
         <View className="flex-row items-center space-x-1 sm:space-x-1.5">
            <View className="flex-row space-x-1">
               <Animated.View style={[shakeLikeAnimatedStyled]}>
                  <ThumbsUp
                     className={`-mt-[2px] ${
                        someInteraction ? 'text-red-400' : 'text-white'
                     } `}
                     size={RFValue(18)}
                  />
               </Animated.View>
               <Text
                  className={styleLike}
                  style={{ fontSize: getFontsize(11) }}
               >
                  {countInteraction}
               </Text>
            </View>
            <Text className={styleLike} style={{ fontSize: getFontsize(10) }}>
               {someInteraction ? 'Curtido' : 'Curtir'}
            </Text>
         </View>
      </Pressable>
   );
}
