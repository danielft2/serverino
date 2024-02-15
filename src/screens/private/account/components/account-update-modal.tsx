import { useState } from 'react';

import { Modal } from '@components/ui/modal';
import { Loading } from '@components/ui/loading';
import { Gradient } from '@components/ui/gradient';
import { UpdateInformationsForm } from './update-informations-form';
import { UpdateInformationsSuccess } from './update-informations-succes';

interface AccountUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AccountUpdateModal({
  isOpen,
  onClose
}: AccountUpdateModalProps) {
  const [render, setRender] = useState(false);
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);

  function onHideModal() {
    if (isUpdateSuccess) setIsUpdateSuccess(false);
    setRender(false);
  }

  function onUpdateResult(result: boolean) {
    if (result) setIsUpdateSuccess(true);
    else onClose();
  }

  return (
    <Modal.Root
      isOpen={isOpen}
      onClose={onClose}
      onShow={() => setRender(true)}
      onHide={onHideModal}
    >
      <Modal.Content>
        <Gradient />
        {render ? (
          !isUpdateSuccess ? (
            <UpdateInformationsForm onUpdateResult={onUpdateResult} />
          ) : (
            <UpdateInformationsSuccess onClose={onClose} />
          )
        ) : (
          <Loading.Background loading />
        )}
      </Modal.Content>
    </Modal.Root>
  );
}
