import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export function Splash() {
  const animation = useRef(null);
  const { navigate } = useNavigation();

  function handleNavigate() {
    setTimeout(() => {
      navigate('aplication');
    }, 2000);
  }

  useFocusEffect(() => {
    setTimeout(() => {
      animation.current.play();
    }, 100);
  });

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <LottieView
        loop={false}
        ref={animation}
        source={require('@assets/splash/splash.json')}
        style={{
          height: RFValue(200),
          marginRight: 8
        }}
        onAnimationFinish={handleNavigate}
      />
    </View>
  );
}
