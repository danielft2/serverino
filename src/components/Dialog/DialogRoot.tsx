import { ReactNode } from 'react';
import { useWindowDimensions } from 'react-native';
import Modal from 'react-native-modal';

interface DialogRootProps {
   children: ReactNode;
   isOpen: boolean;
   onBackdropPress?: () => void;
}

export function DialogRoot({
   children,
   isOpen,
   onBackdropPress
}: DialogRootProps) {
   const { height } = useWindowDimensions();

   return (
      <Modal
         isVisible={isOpen}
         style={{ margin: 32 }}
         animationInTiming={500}
         animationOutTiming={500}
         avoidKeyboard={false}
         statusBarTranslucent={true}
         deviceHeight={height + 100}
         backdropOpacity={0.8}
         onBackdropPress={onBackdropPress}
      >
         {children}
      </Modal>
   );
}
