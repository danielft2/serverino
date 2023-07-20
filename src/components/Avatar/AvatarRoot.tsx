import { ReactNode } from 'react';
import { View } from 'react-native';

interface AvatarRootProps {
   children?: ReactNode;
}

export function AvatarRoot({ children }: AvatarRootProps) {
   return <View className={`relative overflow-hidden`}>{children}</View>;
}
