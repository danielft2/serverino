import clsx from 'clsx';
import {
   ActivityIndicator,
   TouchableOpacity,
   TouchableOpacityProps,
   Text
} from 'react-native';

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
            'w-full base:h-11 sm:h-12 lg:h-14 rounded-full justify-center items-center',
            {
               'bg-green-700': variant === 'primary',
               'bg-gray-600': variant === 'normal',
               'opacity-50': disabled || isLoading
            }
         )}
         {...rest}
      >
         {isLoading ? <ActivityIndicator color="green" /> : children}
      </TouchableOpacity>
   );
}

function ButtonText({ children }: ButtonTextProps) {
   return (
      <Text className="text-white font-heading_md base:text-[11px] md:text-xs lg:text-[14px]">
         {children}
      </Text>
   );
}

export const Button = {
   Root: ButtonRoot,
   Text: ButtonText
};
