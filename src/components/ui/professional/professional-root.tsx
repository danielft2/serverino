import { ReactNode } from 'react';
import { View } from 'react-native';

interface ProfessionalRootProps {
  children: ReactNode;
}

export function ProfessionalRoot({ children }: ProfessionalRootProps) {
  return (
    <View className="mb-5 max-h-[460px] rounded-3xl bg-blue_dark-700 py-5 pb-5">
      {children}
    </View>
  );
}
