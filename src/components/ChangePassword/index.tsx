import { useState } from 'react';

import { Loading } from '@components/Loading';

import { ChangePasswordContent } from './ChangePasswordContent';
import { Modal } from '../Modal';

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
