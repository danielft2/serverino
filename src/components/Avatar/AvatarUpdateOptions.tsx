import {
   View,
   Text,
   useWindowDimensions,
   TouchableOpacity
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Camera, Folders } from 'lucide-react-native';
import Modal from 'react-native-modal';

import { AvatarOptions } from '@domain/types/avatar-options';

interface AvatarUpdateOptionProps {
   isOpen: boolean;
   onClose: () => void;
   onUpdate: (type: AvatarOptions) => void;
}

export function AvatarUpdateOptions({
   isOpen,
   onClose,
   onUpdate
}: AvatarUpdateOptionProps) {
   const { width, height } = useWindowDimensions();

   return (
      <Modal
         isVisible={isOpen}
         animationIn={'slideInUp'}
         animationOut={'slideOutDown'}
         style={{ margin: 0, justifyContent: 'flex-end' }}
         animationInTiming={500}
         animationOutTiming={400}
         deviceWidth={width}
         deviceHeight={height + 100}
         statusBarTranslucent
         backdropOpacity={0.5}
         hideModalContentWhileAnimating={true}
         backdropTransitionOutTiming={0}
         onBackButtonPress={onClose}
         onBackdropPress={onClose}
      >
         <View className="h-[120px] items-center justify-center rounded-t-2xl bg-blue_dark-700 px-8">
            <View className="flex-row items-center space-x-16">
               <TouchableOpacity
                  className="flex items-center space-y-1"
                  onPress={() => onUpdate(AvatarOptions.CAMERA)}
               >
                  <View className="flex h-12 w-12 items-center justify-center rounded-full bg-green-400">
                     <Camera size={RFValue(21)} className="text-white" />
                  </View>
                  <Text
                     className="font-reading text-gray-100"
                     style={{ fontSize: RFValue(13) }}
                  >
                     Câmera
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity
                  className="flex items-center space-y-1"
                  onPress={() => onUpdate(AvatarOptions.GALERY)}
               >
                  <View className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-100">
                     <Folders size={RFValue(20)} className="text-gray-100" />
                  </View>
                  <Text
                     className="font-reading text-gray-100"
                     style={{ fontSize: RFValue(13) }}
                  >
                     Galeria
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </Modal>
   );
}
