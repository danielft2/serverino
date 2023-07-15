import { ReactNode } from 'react';
import { View } from 'react-native';

interface AvatarFallbackProps {
   children: ReactNode;
}

export function AvatarFallback({ children }: AvatarFallbackProps) {
   return (
      <View className="absolute bottom-0 left-0 right-0 top-0 items-center justify-center bg-gray-700">
         {children}
      </View>
   );
}
