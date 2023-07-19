import { View } from 'react-native';
import { Image } from 'expo-image';
import { RFValue } from 'react-native-responsive-fontsize';
import { ReactNode, useState } from 'react';

interface AvatarRootProps {
   children?: ReactNode;
}

export function AvatarRoot({ children }: AvatarRootProps) {
   return <View className={`relative overflow-hidden`}>{children}</View>;
}
