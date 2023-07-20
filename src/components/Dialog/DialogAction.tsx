import { styled } from 'nativewind';
import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

interface DialogActionProps {
   children?: ReactNode;
   onPress?: () => void;
}

export function DialogActionStyled({
   children,
   onPress,
   ...rest
}: DialogActionProps) {
   return (
      <TouchableOpacity
         onPress={onPress}
         hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
         className="w-full items-center py-3"
         {...rest}
      >
         {children}
      </TouchableOpacity>
   );
}

export const DialogAction = styled(DialogActionStyled);
