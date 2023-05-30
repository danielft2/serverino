import { View } from 'react-native';
import { ControlledLocation } from '@components/FormControlled/ControlledLocation';

export function LocationData() {
   return (
      <View>
         <ControlledLocation name="endereco" />
      </View>
   );
}
