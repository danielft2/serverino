import { ReactNode } from 'react';
import { View } from 'react-native';

interface OptionContainerProps {
   children: ReactNode;
}

export function OptionContainer({ children }: OptionContainerProps) {
   return <View className="flex-row items-center space-x-3">{children}</View>;
}
