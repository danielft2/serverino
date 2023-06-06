import { TouchableOpacity, View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../theme';

import { ChevronLeft } from 'lucide-react-native';

interface HeaderProps {
   children: React.ReactNode;
   onHandleClickButton: () => void;
}

export function Header({ children, onHandleClickButton }: HeaderProps) {
   return (
      <View className="flex-row items-center">
         <TouchableOpacity
            className="items-center justify-center rounded-full bg-zinc-800"
            style={{ width: 44, height: 44 }}
            onPress={onHandleClickButton}
         >
            <ChevronLeft
               className="mr-0.5"
               size={RFValue(24)}
               color={theme.colors.green[600]}
            />
         </TouchableOpacity>
         <View className="flex-1" style={{ marginRight: RFPercentage(5) }}>
            {children && children}
         </View>
      </View>
   );
}
