import { View, ActivityIndicator } from 'react-native';

import { theme } from '../../theme';

interface LoadingProps {
   loading?: boolean;
}

function LoadingDefault({ loading = true }: LoadingProps) {
   return (
      <>{loading && <ActivityIndicator color={theme.colors.green[600]} />}</>
   );
}

function LoadingBackground({ loading }: LoadingProps) {
   return (
      <>
         {loading && (
            <View className="absolute bottom-0 left-0 right-0 top-0 items-center justify-center bg-black/50">
               <LoadingDefault />
            </View>
         )}
      </>
   );
}

export const Loading = {
   default: LoadingDefault,
   background: LoadingBackground
};
