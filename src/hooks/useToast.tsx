import Toast from 'react-native-toast-message';

export function useToast() {
   function onErrorMessage(msg: string) {
      Toast.show({
         type: 'error',
         text2: msg
      });
   }

   function onSucessMessage(msg: string) {
      Toast.show({
         type: 'success',
         text2: msg
      });
   }

   function onBasicMessage(msg: string) {
      Toast.show({
         type: 'basic',
         text2: msg
      });
   }

   return {
      onErrorMessage,
      onSucessMessage,
      onBasicMessage
   };
}
