import { useState } from 'react';

import { Modal } from '@components/Modal';
import { ButtonBack } from '@components/ButtonBack';
import { Loading } from '@components/Loading';
import { Gradient } from '@components/Gradient';

import { UpdateInformationsForm } from './UpdateInformationsForm';
import { UpdateInformationsSuccess } from './UpdateInformationsSucces';

interface UpdateInformationsModalProps {
   isOpen: boolean;
   onClose: () => void;
}

export function UpdateInformationsModal({
   isOpen,
   onClose
}: UpdateInformationsModalProps) {
   const [render, setRender] = useState(false);
   const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);

   function onHideModal() {
      if (isUpdateSuccess) setIsUpdateSuccess(false);
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
            <Gradient />
            {render ? (
               !isUpdateSuccess ? (
                  <UpdateInformationsForm
                     onUpdate={(status) =>
                        status ? setIsUpdateSuccess(true) : onClose()
                     }
                  />
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
