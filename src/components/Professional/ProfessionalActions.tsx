import { ReactNode } from 'react';
import { View } from 'react-native';

interface ProfessionalActionsProps {
   children: ReactNode;
}

export function ProfessionalActions({ children }: ProfessionalActionsProps) {
   return (
      <View className="w-full flex-row items-center justify-between border-t border-blue_dark-300 px-5 pt-4">
         {children}
      </View>
   );
}
