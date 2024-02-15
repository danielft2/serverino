import { Pressable } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface BottomSheetBackdropProps {
  onClose: () => void;
}

export function BottomSheetBackdrop({ onClose }: BottomSheetBackdropProps) {
  return (
    <AnimatedPressable
      entering={FadeIn.delay(2)}
      exiting={FadeOut.delay(2)}
      onPress={onClose}
      className="absolute bottom-0 left-0 right-0 top-0 bg-black/50"
    ></AnimatedPressable>
  );
}
