import { Pressable, View, Text } from 'react-native';
import { ThumbsUp } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated, {
   useAnimatedStyle,
   useSharedValue,
   withTiming
} from 'react-native-reanimated';
import clsx from 'clsx';

import { useProfessional } from '@hooks/shared';

interface ProfessionalActionLikeProps {
   user_id: number;
   professional_id: string;
   interactions: {
      tipo_id: number;
      registro_id: number;
   }[];
}

export function ProfessionalActionLike({
   user_id,
   professional_id,
   interactions
}: ProfessionalActionLikeProps) {
   const { handleClickInteraction, countInteraction, someInteraction } =
      useProfessional({
         type: 1,
         interactions,
         user_id,
         professional_id
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
      <Pressable
         onPressIn={handleLike}
         onPressOut={onPressOut}
         hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
      >
         <View className="flex-row items-center space-x-1.5">
            <View className="flex-row space-x-1">
               <Animated.View style={[shakeLikeAnimatedStyled]}>
                  <ThumbsUp
                     className={`-mt-[2px] ${
                        someInteraction ? 'text-red-400' : 'text-white'
                     } `}
                     size={RFValue(18)}
                  />
               </Animated.View>
               <Text className={styleLike} style={{ fontSize: RFValue(11) }}>
                  {countInteraction}
               </Text>
            </View>
            <Text className={styleLike} style={{ fontSize: RFValue(10) }}>
               {someInteraction ? 'Curtido' : 'Curtir'}
            </Text>
         </View>
      </Pressable>
   );
}
