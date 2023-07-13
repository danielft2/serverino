import { Text } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ButtonTextProps {
   children: React.ReactNode;
   className?: string;
}

export function ButtonText({ children, className }: ButtonTextProps) {
   return (
      <Text
         className={twMerge(
            'font-heading_md text-white base:text-[11px] md:text-xs lg:text-[14px]',
            className
         )}
      >
         {children}
      </Text>
   );
}
