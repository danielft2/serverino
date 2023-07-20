import { View, ActivityIndicator } from 'react-native';

import { theme } from '../../theme';
import { twMerge } from 'tailwind-merge';
import { styled } from 'nativewind';

interface LoadingProps {
   loading?: boolean;
   size?: number;
   className?: string;
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

function LoadingBackground({ loading, className }: LoadingProps) {
   return (
      <>
         {loading && (
            <View
               className={twMerge(
                  'absolute bottom-0 left-0 right-0 top-0 items-center justify-center bg-blue_dark-900/50',
                  className
               )}
            >
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
