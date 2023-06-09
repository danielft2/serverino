import {
   ActivityIndicator,
   TouchableOpacity,
   TouchableOpacityProps,
   Text
} from 'react-native';

import clsx from 'clsx';

interface ButtonRootProps extends TouchableOpacityProps {
   children: React.ReactNode;
   variant: 'primary' | 'normal';
   isLoading?: boolean;
   isDisabled?: boolean;
}

interface ButtonTextProps {
   children: React.ReactNode;
}

function ButtonRoot({
   children,
   variant,
   isLoading,
   disabled,
   ...rest
}: ButtonRootProps) {
   return (
      <TouchableOpacity
         className={clsx(
            'w-full items-center justify-center rounded-full base:h-11 sm:h-[52px] lg:h-14',
            {
               'bg-green-600': variant === 'primary',
               'bg-gray-600': variant === 'normal',
               'opacity-50': disabled || isLoading
            }
         )}
         {...rest}
         disabled={disabled}
      >
         {isLoading ? <ActivityIndicator color="green" /> : children}
      </TouchableOpacity>
   );
}

function ButtonText({ children }: ButtonTextProps) {
   return (
      <Text className="font-heading_md text-white base:text-[11px] md:text-xs lg:text-[14px]">
         {children}
      </Text>
   );
}

export const Button = {
   Root: ButtonRoot,
   Text: ButtonText
};
