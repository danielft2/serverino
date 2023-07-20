import { View, ActivityIndicator } from 'react-native';

import { theme } from '../../theme';
import { styled } from 'nativewind';

interface LoadingProps {
   loading?: boolean;
   size?: number;
   color?: string;
}

function LoadingDefaultStyled({
   loading = true,
   size = 20,
   color,
   ...rest
}: LoadingProps) {
   return (
      <>
         {loading && (
            <ActivityIndicator
               color={color ? color : theme.colors.green[600]}
               size={size}
               {...rest}
            />
         )}
      </>
   );
}

function LoadingBackground({ loading }: LoadingProps) {
   return (
      <>
         {loading && (
            <View className="absolute bottom-0 left-0 right-0 top-0 items-center justify-center bg-blue_dark-900/50">
               <ActivityIndicator size={32} color={theme.colors.green[600]} />
            </View>
         )}
      </>
   );
}

export const Loading = {
   Default: styled(LoadingDefaultStyled),
   Background: LoadingBackground
};
