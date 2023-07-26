import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Modal } from '@components/Modal';
import { ButtonBack } from '@components/ButtonBack';
import { Loading } from '@components/Loading';
import UpdateIlustatrion from '@assets/ilustrations/update-data.svg';

import { UpdateInformationsForm } from './UpdateInformationsForm';
import { Gradient } from '@components/Gradient';

interface UpdateInformationsProps {
   isOpen: boolean;
   onClose: () => void;
}

export function UpdateInformations({
   isOpen,
   onClose
}: UpdateInformationsProps) {
   const [render, setRender] = useState(false);

   return (
      <Modal.Root
         isOpen={isOpen}
         onClose={onClose}
         onShow={() => setRender(true)}
         onHide={() => setRender(false)}
      >
         <Modal.Content>
            <Gradient />
            {render ? (
               <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ flex: 1 }}
               >
                  <ButtonBack onPress={onClose} />
                  <View className="items-center">
                     <UpdateIlustatrion
                        width={RFValue(200)}
                        height={RFValue(140)}
                     />
                  </View>
                  <UpdateInformationsForm onUpdateEnd={onClose} />
               </ScrollView>
            ) : (
               <Loading.Background loading />
            )}
         </Modal.Content>
      </Modal.Root>
   );
}
