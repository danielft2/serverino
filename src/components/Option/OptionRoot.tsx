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
         className={clsx(
            'w-full base:rounded-lg base:py-2 md:rounded-xl md:py-2.5 lg:py-3.5',
            {
               'flex-row items-center justify-between bg-blue_dark-500 px-4 lg:px-5':
                  isBackground
            }
         )}
      >
         {children}
      </View>
   );
}
