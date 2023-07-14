import { useCallback, useState } from 'react';
import { InteractionManager } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Register } from '@screens/public';
import { Loading } from '@components/Loading';

export function RegisterLazy() {
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

   if (render) return <Register />;
   return <Loading.Background loading={true} />;
}
