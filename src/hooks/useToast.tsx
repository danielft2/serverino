import Toast from 'react-native-toast-message';

export function useToast() {
   function showErrorMessage(msg: string) {
      Toast.show({
         type: 'error',
         text2: msg
      });
   }

   function showSucessMessage(msg: string) {
      Toast.show({
         type: 'success',
         text2: msg
      });
   }

   function showBasicMessage(msg: string) {
      Toast.show({
         type: 'basic',
         text2: msg
      });
   }

   return {
      showErrorMessage,
      showSucessMessage,
      showBasicMessage
   };
}
