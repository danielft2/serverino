import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ChevronLeft } from 'lucide-react-native';

interface ButtonBackProps {
   onPress: () => void;
}

export function ButtonBack({ onPress }: ButtonBackProps) {
   return (
      <TouchableOpacity
         className="items-center justify-center rounded-full bg-blue_dark-300"
         style={{ width: RFValue(44), height: RFValue(44) }}
         onPress={onPress}
      >
         <ChevronLeft className="mr-0.5 text-white" size={RFValue(24)} />
      </TouchableOpacity>
   );
}
