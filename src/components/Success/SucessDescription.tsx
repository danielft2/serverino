import { ReactNode } from 'react';
import { Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface SuccessDescriptionProps {
   children: ReactNode;
}

export function SuccessDescription({ children }: SuccessDescriptionProps) {
   return (
      <Text
         className="-mt-1 text-center leading-relaxed text-gray-100"
         style={{ fontSize: RFValue(13) }}
      >
         {children}
      </Text>
   );
}
