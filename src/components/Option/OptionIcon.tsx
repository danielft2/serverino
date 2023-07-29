import { ReactNode } from 'react';
import { View } from 'react-native';

interface OptionIconProps {
   children: ReactNode;
}

export function OptionIcon({ children }: OptionIconProps) {
   return (
      <View className="items-center justify-center bg-[#2A2C33] base:h-9 base:w-9 base:rounded-lg sm:h-10 sm:w-10 md:rounded-lg lg:h-11 lg:w-11">
         {children}
      </View>
   );
}
