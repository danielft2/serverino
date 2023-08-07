import { ReactNode } from 'react';
import { Text } from 'react-native';

import { useFontsize } from '@hooks/shared';

interface DialogDescriptionProps {
   children: ReactNode;
}

export function DialogDescription({ children }: DialogDescriptionProps) {
   const { getFontsize } = useFontsize();

   return (
      <Text
         className="-mt-1 text-gray-200"
         style={{ fontSize: getFontsize(13) }}
      >
         {children}
      </Text>
   );
}
