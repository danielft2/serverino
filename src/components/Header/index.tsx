import { View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { ButtonBack } from '@components/ButtonBack';

interface HeaderProps {
   children: React.ReactNode;
   onHandleClickButton: () => void;
}

export function Header({ children, onHandleClickButton }: HeaderProps) {
   return (
      <View className="flex-row items-center">
         <ButtonBack onPress={onHandleClickButton} />
         <View className="flex-1" style={{ marginRight: RFPercentage(5) }}>
            {children && children}
         </View>
      </View>
   );
}
