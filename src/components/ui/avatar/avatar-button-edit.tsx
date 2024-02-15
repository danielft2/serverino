import { TouchableOpacity } from 'react-native';
import { Camera } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface AvatarButtonEditProps {
  onPress: () => void;
}

export function AvatarButtonEdit({ onPress }: AvatarButtonEditProps) {
  return (
    <TouchableOpacity
      className="absolute bottom-0 right-0 z-20 items-center justify-center rounded-full border-[3px] 
         border-blue_dark-800 bg-green-400 base:h-8 base:w-8 md:h-9 md:w-9"
      hitSlop={{ top: 48, bottom: 48, left: 48, right: 48 }}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Camera size={RFValue(18)} className="text-white" />
    </TouchableOpacity>
  );
}
