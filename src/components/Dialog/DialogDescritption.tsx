import { ReactNode } from 'react';
import { Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface DialogDescriptionProps {
   children: ReactNode;
}

export function DialogDescription({ children }: DialogDescriptionProps) {
   return (
      <Text className="-mt-1 text-gray-200" style={{ fontSize: RFValue(13) }}>
         {children}
      </Text>
   );
}
