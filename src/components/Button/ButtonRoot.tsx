import {
   ActivityIndicator,
   TouchableOpacity,
   TouchableOpacityProps
} from 'react-native';
import { VariantProps, cva } from 'class-variance-authority';

import { cnMerge } from '@utils';
import { styled } from 'nativewind';

const ButtonVariants = cva(
   'items-center justify-center base:h-11 sm:h-[52px] lg:h-14',
   {
      variants: {
         variant: {
            primary: 'bg-green-600 w-full',
            secondary: 'bg-gray-600 w-full',
            danger: 'bg-red-400 w-full ',
            link: 'bg-transparent w-auto'
         },
         shape: {
            rounded: 'rounded-full',
            normal: 'rounded'
         }
      },
      defaultVariants: {
         variant: 'primary',
         shape: 'rounded'
      }
   }
);

interface ButtonRootProps
   extends TouchableOpacityProps,
      VariantProps<typeof ButtonVariants> {
   children: React.ReactNode;
   isLoading?: boolean;
}

function ButtonRootStyled({
   className,
   variant,
   shape,
   children,
   isLoading,
   disabled,
   ...rest
}: ButtonRootProps) {
   return (
      <TouchableOpacity
         className={cnMerge(ButtonVariants({ className, variant, shape }), {
            'opacity-50': isLoading || disabled
         })}
         {...rest}
      >
         {isLoading ? <ActivityIndicator color="green" /> : children}
      </TouchableOpacity>
   );
}

export const ButtonRoot = styled(ButtonRootStyled);
