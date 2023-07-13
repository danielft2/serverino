import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

export interface InputTextIconButton {
   children: ReactNode;
   onPress: () => void;
}

export function InputTextIconPassword({
   onPress,
   children
}: InputTextIconButton) {
   return (
      <TouchableOpacity
         hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
         onPress={onPress}
      >
         {children}
      </TouchableOpacity>
   );
}
