import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

export function Splash() {
   const animation = useRef(null);
   const { navigate } = useNavigation();

   function handleNavigate() {
      setTimeout(() => {
         navigate('welcome');
      }, 2000);
   }

   useFocusEffect(() => {
      setTimeout(() => {
         animation.current.play();
      }, 100);
   });

   return (
      <View className="flex-1 bg-black justify-center items-center">
         <LottieView
            loop={false}
            ref={animation}
            source={require('@assets/splash/splash.json')}
            style={{
               height: 220,
               marginRight: 8
            }}
            onAnimationFinish={handleNavigate}
         />
      </View>
   );
}
