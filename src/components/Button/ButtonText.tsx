import { useFontsize } from '@hooks/shared';
import { Text } from 'react-native';

interface ButtonTextProps {
   children: React.ReactNode;
}

export function ButtonText({ children }: ButtonTextProps) {
   const { getFontsize } = useFontsize();
   return (
      <Text
         className="font-heading_md text-white"
         style={{ fontSize: getFontsize(11) }}
      >
         {children}
      </Text>
   );
}
