import { View } from 'react-native';
import { UncontrolledLocation } from '@components/FormUncontrolled/UncontrolledLocation';

export function LocationData() {
   return (
      <View>
         <UncontrolledLocation name="endereco" />
      </View>
   );
}
