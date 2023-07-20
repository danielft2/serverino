import { styled } from 'nativewind';
import { Text } from 'react-native';

interface ButtonTextProps {
   children: React.ReactNode;
}

export function ButtonTextStyled({ children, ...rest }: ButtonTextProps) {
   return (
      <Text
         className="font-heading_md text-white base:text-[11px] md:text-xs lg:text-[14px]"
         {...rest}
      >
         {children}
      </Text>
   );
}

export const ButtonText = styled(ButtonTextStyled);
