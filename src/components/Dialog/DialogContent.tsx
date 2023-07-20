import { ReactNode } from 'react';
import { View } from 'react-native';

interface DialogContentProps {
   children: ReactNode;
}

export function DialogContent({ children }: DialogContentProps) {
   return (
      <View className="z-10 rounded-xl border border-blue_dark-700 bg-blue_dark-900 pt-6">
         {children}
      </View>
   );
}
