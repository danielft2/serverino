import { useState } from 'react';

import { Modal } from '@components/Modal';
import { Loading } from '@components/Loading';
import { Gradient } from '@components/Gradient';

import { UpdateInformationsForm } from './components/UpdateInformationsForm';
import { UpdateInformationsSuccess } from './components/UpdateInformationsSucces';

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
