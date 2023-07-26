import { ReactNode } from 'react';
import { View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

interface ModalContentProps {
   children: ReactNode;
}

export function ModalContent({ children }: ModalContentProps) {
   const statusBarHeigth = getStatusBarHeight();
   return (
      <View
         className="flex-1 bg-blue_dark-900 p-4"
         style={{ paddingTop: statusBarHeigth + 10 }}
      >
         {children}
      </View>
   );
}
