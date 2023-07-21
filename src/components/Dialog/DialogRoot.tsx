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
         animationIn={'fadeIn'}
         animationOut={'fadeOut'}
         style={{ margin: 32 }}
         animationInTiming={500}
         animationOutTiming={300}
         avoidKeyboard={false}
         statusBarTranslucent={true}
         deviceHeight={height + 100}
         backdropOpacity={0.8}
         hideModalContentWhileAnimating={true}
         backdropTransitionOutTiming={0}
         onBackdropPress={onBackdropPress}
      >
         {children}
      </Modal>
   );
}
