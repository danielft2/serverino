import { Text, TextProps, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface LabelProps extends TextProps {
   children: React.ReactNode;
   required?: boolean;
}

export function InputLabel({
   children,
   required = false,
   ...rest
}: LabelProps) {
   return (
      <View className="flex-row space-x-1">
         <Text
            className="mb-1 ml-1 font-heading_md text-white"
            style={{ fontSize: RFValue(12.8) }}
            {...rest}
         >
            {children}
         </Text>
         {required ? (
            <Text className="text-red-400" style={{ fontSize: RFValue(12) }}>
               *
            </Text>
         ) : (
            ''
         )}
      </View>
   );
}
