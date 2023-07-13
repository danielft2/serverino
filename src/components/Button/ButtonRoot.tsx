import {
   ActivityIndicator,
   TouchableOpacity,
   TouchableOpacityProps
} from 'react-native';
import { VariantProps, cva } from 'class-variance-authority';

import { cnMerge } from '@utils';

const ButtonVariants = cva(
   'w-full items-center justify-center rounded-full base:h-11 sm:h-[52px] lg:h-14',
   {
      variants: {
         variant: {
            primary: 'bg-green-600',
            secondary: 'bg-gray-600'
         }
      },
      defaultVariants: {
         variant: 'primary'
      }
   }
);

interface ButtonRootProps
   extends TouchableOpacityProps,
      VariantProps<typeof ButtonVariants> {
   children: React.ReactNode;
   isLoading?: boolean;
}

export function ButtonRoot({
   className,
   variant,
   children,
   isLoading,
   disabled,
   ...rest
}: ButtonRootProps) {
   return (
      <TouchableOpacity
         className={cnMerge(ButtonVariants({ className, variant }), {
            'opacity-50': isLoading || disabled
         })}
         {...rest}
      >
         {isLoading ? <ActivityIndicator color="green" /> : children}
      </TouchableOpacity>
   );
}
