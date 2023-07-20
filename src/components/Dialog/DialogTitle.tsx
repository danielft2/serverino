import { Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface DialogTitleProps {
   title: string;
}

export function DialogTitle({ title }: DialogTitleProps) {
   return (
      <Text
         className="font-heading_md text-white"
         style={{ fontSize: RFValue(14) }}
      >
         {title}
      </Text>
   );
}
