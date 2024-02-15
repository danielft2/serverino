import { useState } from 'react';

import { Loading } from '@components/ui/loading';
import { Modal } from '@components/ui/modal';

import { ChangePasswordContent } from './change-password-content';

interface ChangePasswordProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChangePassword({ isOpen, onClose }: ChangePasswordProps) {
  const [render, setRender] = useState(false);

  function onHideModal() {
    setRender(false);
  }

  return (
    <Modal.Root
      isOpen={isOpen}
      onClose={onClose}
      onShow={() => setRender(true)}
      onHide={onHideModal}
    >
      <Modal.Content>
        {render ? (
          <ChangePasswordContent onClose={onClose} />
        ) : (
          <Loading.Background loading />
        )}
      </Modal.Content>
    </Modal.Root>
  );
}
