import { useCallback, useState } from 'react';
import { InteractionManager } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export function useLazy() {
   const [render, setRender] = useState(false);

   useFocusEffect(
      useCallback(() => {
         InteractionManager.runAfterInteractions(() => {
            setTimeout(() => {
               setRender(true);
            }, 200);
         });
      }, [])
   );

   return {
      render
   };
}
