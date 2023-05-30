import { Text, TextProps } from 'react-native';

interface LabelProps extends TextProps {
   children: React.ReactNode;
}

export function InputLabel({ children, ...rest }: LabelProps) {
   return (
      <Text
         className="text-white font-heading_md mb-1 ml-1"
         style={{ fontSize: 12.8 }}
         {...rest}
      >
         {children}
      </Text>
   );
}
