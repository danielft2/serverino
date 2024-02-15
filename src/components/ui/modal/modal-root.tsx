import { ReactNode } from 'react';
import { useWindowDimensions } from 'react-native';
import Modal from 'react-native-modal';

interface ModalRootProps {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  onShow?: () => void;
  onHide?: () => void;
}

export function ModalRoot({
  children,
  isOpen,
  onClose,
  onShow,
  onHide
}: ModalRootProps) {
  const { height, width } = useWindowDimensions();

  return (
    <Modal
      isVisible={isOpen}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      style={{ margin: 0 }}
      animationInTiming={500}
      animationOutTiming={400}
      avoidKeyboard={false}
      statusBarTranslucent={true}
      deviceHeight={height + 100}
      deviceWidth={width}
      backdropOpacity={0.8}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      onModalShow={onShow}
      onModalHide={onHide}
    >
      {children}
    </Modal>
  );
}
