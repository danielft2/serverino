import { View } from 'react-native';
import { InputLocationControll } from '@components/FormControlled/InputLocation';

export function LocationData() {
   return (
      <View>
         <InputLocationControll name="endereco" />
      </View>
   );
}
