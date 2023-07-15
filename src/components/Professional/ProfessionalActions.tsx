import { ReactNode } from 'react';
import { View } from 'react-native';

interface ProfessionalActionsProps {
   children: ReactNode;
}

export function ProfessionalActions({ children }: ProfessionalActionsProps) {
   return (
      <View className="mt-2 w-full flex-row justify-between border-t border-blue_dark-300 px-5 pt-4">
         {children}
      </View>
   );
}
