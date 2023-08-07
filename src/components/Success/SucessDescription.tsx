import { ReactNode } from 'react';
import { Text } from 'react-native';

import { useFontsize } from '@hooks/shared';

interface SuccessDescriptionProps {
   children: ReactNode;
}

export function SuccessDescription({ children }: SuccessDescriptionProps) {
   const { getFontsize } = useFontsize();
   return (
      <Text
         className="-mt-1 text-center leading-relaxed text-gray-100"
         style={{ fontSize: getFontsize(13) }}
      >
         {children}
      </Text>
   );
}
