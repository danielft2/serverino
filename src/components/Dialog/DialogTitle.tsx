import { useFontsize } from '@hooks/shared';
import { Text } from 'react-native';

interface DialogTitleProps {
   title: string;
}

export function DialogTitle({ title }: DialogTitleProps) {
   const { getFontsize } = useFontsize();

   return (
      <Text
         className="font-heading_sm text-white"
         style={{ fontSize: getFontsize(14) }}
      >
         {title}
      </Text>
   );
}
