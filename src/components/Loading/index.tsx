import { View, ActivityIndicator } from 'react-native';

import { theme } from '../../theme';
import { twMerge } from 'tailwind-merge';

interface LoadingProps {
   loading?: boolean;
   className?: string;
}

function LoadingDefault({ loading = true }: LoadingProps) {
   return (
      <>{loading && <ActivityIndicator color={theme.colors.green[600]} />}</>
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
   Default: LoadingDefault,
   Background: LoadingBackground
};
