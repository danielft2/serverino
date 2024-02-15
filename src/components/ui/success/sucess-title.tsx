import { ReactNode } from 'react';
import { Text } from 'react-native';

import { useFontsize } from '@hooks';

interface SuccesTitleProps {
  children: ReactNode;
}

export function SuccessTitle({ children }: SuccesTitleProps) {
  const { getFontsize } = useFontsize();
  return (
    <Text
      className="font-heading_sm text-white"
      style={{ fontSize: getFontsize(16) }}
    >
      {children}
    </Text>
  );
}
