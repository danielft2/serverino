import {
   ActivityIndicator,
   TouchableOpacity,
   TouchableOpacityProps
} from 'react-native';
import { VariantProps, cva } from 'class-variance-authority';

import { cnMerge } from '@utils';
import { styled } from 'nativewind';

const ButtonVariants = cva(
   'items-center justify-center base:h-11 sm:h-[50px] lg:h-14',
   {
      variants: {
         variant: {
            primary: 'bg-green-600',
            secondary: 'bg-blue_dark-300',
            danger: 'bg-red-400',
            link: 'bg-transparent w-auto'
         },
         shape: {
            rounded: 'rounded-full',
            normal: 'rounded'
         },
         weigth: {
            full: 'w-full',
            auto: 'w-auto px-6'
         }
      },
      defaultVariants: {
         variant: 'primary',
         shape: 'rounded',
         weigth: 'full'
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
   weigth,
   children,
   isLoading,
   disabled,
   ...rest
}: ButtonRootProps) {
   return (
      <TouchableOpacity
         activeOpacity={0.7}
         className={cnMerge(
            ButtonVariants({ className, variant, shape, weigth }),
            {
               'opacity-50': disabled
            }
         )}
         disabled={disabled || isLoading}
         {...rest}
      >
         {isLoading ? <ActivityIndicator size={24} color="white" /> : children}
      </TouchableOpacity>
   );
}

export const ButtonRoot = styled(ButtonRootStyled);
