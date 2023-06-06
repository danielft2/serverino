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
            <View className="bg-black/50 justify-center items-center absolute top-0 bottom-0 left-0 right-0">
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
