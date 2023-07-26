import { Pressable } from 'react-native';
import { Camera } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export function AvatarButtonEdit() {
   return (
      <Pressable
         className="absolute bottom-0 right-0 z-20 items-center justify-center rounded-full border-[3px] 
         border-blue_dark-800 bg-green-400 base:h-8 base:w-8 md:h-9 md:w-9"
         hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
      >
         <Camera size={RFValue(18)} className="text-white" />
      </Pressable>
   );
}
