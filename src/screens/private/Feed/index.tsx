import { View, Text } from 'react-native';
import { useAuth } from '@hooks';

export function Feed() {
   const { user } = useAuth();

   return (
      <View className="flex-1 bg-gray-950 justify-center items-center">
         <Text className="text-white">{user.nome}</Text>
      </View>
   );
}
