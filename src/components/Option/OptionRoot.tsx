import clsx from 'clsx';
import { ReactNode } from 'react';
import { View } from 'react-native';

interface OptionRootProps {
   children: ReactNode;
   isBackground?: boolean;
}

export function OptionRoot({ children, isBackground }: OptionRootProps) {
   return (
      <View
         className={clsx('w-full rounded-xl px-4 py-3', {
            'flex-row items-center justify-between bg-blue_dark-600':
               isBackground
         })}
      >
         {children}
      </View>
   );
}
