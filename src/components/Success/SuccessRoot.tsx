import { ReactNode, useRef } from 'react';
import { View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Animated, { FadeIn } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

import { ButtonBack } from '@components/ButtonBack';

interface SuccessRootProps {
   children: ReactNode;
   onClose: () => void;
}

export function SuccessRoot({ children, onClose }: SuccessRootProps) {
   const animation = useRef(null);

   return (
      <Animated.View
         entering={FadeIn.delay(100)}
         style={{ height: RFPercentage(80) }}
      >
         <ButtonBack onPress={onClose} />
         <View className="flex-1 items-center justify-center">
            <View style={{ width: RFValue(160), height: RFValue(160) }}>
               <LottieView
                  autoPlay
                  loop={false}
                  ref={animation}
                  resizeMode="cover"
                  source={require('@assets/animations/success.json')}
               />
            </View>
            {children}
         </View>
      </Animated.View>
   );
}
