import { ReactNode } from 'react';
import { View } from 'react-native';

interface DialogHeaderProps {
   children?: ReactNode;
}

export function DialogHeader({ children }: DialogHeaderProps) {
   return <View className="mb-1 items-center px-7">{children}</View>;
}
