import { ReactNode } from 'react';
import { Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface SuccesTitleProps {
   children: ReactNode;
}

export function SuccessTitle({ children }: SuccesTitleProps) {
   return (
      <Text
         className="font-heading_sm text-white"
         style={{ fontSize: RFValue(16) }}
      >
         {children}
      </Text>
   );
}
