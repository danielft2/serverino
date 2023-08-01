import { styled } from 'nativewind';
import { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ResultProps {
   children: ReactNode;
   result: string;
}

export function ResultStyled({ children, result, ...rest }: ResultProps) {
   return (
      <View
         className="w-auto flex-grow flex-row items-center justify-center space-x-2 rounded-md bg-blue_dark-600 px-3 py-2"
         {...rest}
      >
         {children}
         <Text
            className="-mb-[1.5px] font-heading_md text-gray-50"
            style={{ fontSize: RFValue(10) + 0.5 }}
         >
            {result}
         </Text>
      </View>
   );
}

export const Result = styled(ResultStyled);
