import { ReactNode } from 'react';
import { View } from 'react-native';

interface ProfessionalContainerProps {
   children: ReactNode;
}

export function ProfessionalContainer({
   children
}: ProfessionalContainerProps) {
   return <View className="">{children}</View>;
}
