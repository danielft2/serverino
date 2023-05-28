import { View, ActivityIndicator } from 'react-native';
import { theme } from '../../theme';

function LoadingDefault() {
   return <ActivityIndicator color={theme.colors.green[600]} />;
}

function LoadingBackground() {
   return (
      <View className="flex-1 bg-gray-950/50">
         <LoadingDefault />
      </View>
   );
}

export const Loading = {
   default: LoadingDefault,
   background: LoadingBackground
};
