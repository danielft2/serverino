import { ReactNode } from 'react';
import { View } from 'react-native';

interface InputTextIconRootProps {
   children: ReactNode;
}

export function InputTextIconRoot({ children }: InputTextIconRootProps) {
   return (
      <View className="absolute right-0 top-[30%] mr-5 -translate-y-1/2">
         {children}
      </View>
   );
}
