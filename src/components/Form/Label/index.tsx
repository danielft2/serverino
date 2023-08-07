import { Text, TextProps, View } from 'react-native';

import { useFontsize } from '@hooks/shared';

interface LabelProps extends TextProps {
   children: React.ReactNode;
   required?: boolean;
}

export function InputLabel({
   children,
   required = false,
   ...rest
}: LabelProps) {
   const { getFontsize } = useFontsize();

   return (
      <View className="flex-row space-x-1">
         <Text
            className="mb-1 ml-1 font-heading_md text-white"
            style={{ fontSize: getFontsize(11) }}
            {...rest}
         >
            {children}
         </Text>
         {required ? (
            <Text
               className="text-red-400"
               style={{ fontSize: getFontsize(12) }}
            >
               *
            </Text>
         ) : (
            ''
         )}
      </View>
   );
}
