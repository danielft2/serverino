import { ReactNode, useRef } from 'react';
import { View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Animated, { FadeIn } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

interface SuccessRootProps {
   children: ReactNode;
}

export function SuccessRoot({ children }: SuccessRootProps) {
   const animation = useRef(null);

   return (
      <Animated.View
         entering={FadeIn.delay(100)}
         className="items-center justify-center"
         style={{ height: RFPercentage(80) }}
      >
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
      </Animated.View>
   );
}
