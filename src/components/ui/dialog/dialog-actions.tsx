import { ReactNode } from 'react';
import { View } from 'react-native';

interface DialogActionsProps {
  children?: ReactNode;
}

export function DialogActions({ children }: DialogActionsProps) {
  return (
    <View className="mt-5 items-center justify-center divide-y-[1px] divide-blue_dark-400 border-t border-blue_dark-400">
      {children}
    </View>
  );
}
