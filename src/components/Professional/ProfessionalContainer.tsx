import { ReactNode } from 'react';
import { View } from 'react-native';

interface ProfessionalContainerProps {
   children: ReactNode;
}

export function ProfessionalContainer({
   children
}: ProfessionalContainerProps) {
   return (
      <View className="mb-5 rounded-3xl bg-blue_dark-700 pb-5">{children}</View>
   );
}
