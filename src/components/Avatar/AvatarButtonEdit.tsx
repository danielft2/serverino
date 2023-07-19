import { Pressable } from 'react-native';
import { Camera } from 'lucide-react-native';

export function AvatarButtonEdit() {
   return (
      <Pressable
         className="absolute bottom-0 right-0 z-20 h-9 w-9 items-center justify-center 
         rounded-full border-[3px] border-blue_dark-800 bg-green-400"
         hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
      >
         <Camera size={18} className="text-white" />
      </Pressable>
   );
}
