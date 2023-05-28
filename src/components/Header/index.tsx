import { TouchableOpacity, View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { ChevronLeft } from 'lucide-react-native';
import { theme } from '../../theme';

interface HeaderProps {
   children: React.ReactNode;
   onHandleClickButton: () => void;
}

export function Header({ children, onHandleClickButton }: HeaderProps) {
   return (
      <View className="flex-row items-center">
         <TouchableOpacity
            className="bg-zinc-800 rounded-full justify-center items-center"
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
