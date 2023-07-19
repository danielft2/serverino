import { ReactNode } from 'react';
import { View } from 'react-native';

interface OptionIconProps {
   children: ReactNode;
}

export function OptionIcon({ children }: OptionIconProps) {
   return (
      <View className="h-10 w-10 items-center justify-center rounded-lg bg-[#2A2C33]">
         {children}
      </View>
   );
}
