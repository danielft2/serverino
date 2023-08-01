import { styled } from 'nativewind';
import { ReactNode } from 'react';
import { View } from 'react-native';

interface AvatarRootProps {
   children?: ReactNode;
}

function AvatarRootStyled({ children, ...rest }: AvatarRootProps) {
   return (
      <View className={`relative overflow-hidden`} {...rest}>
         {children}
      </View>
   );
}

export const AvatarRoot = styled(AvatarRootStyled);
